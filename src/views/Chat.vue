<template>
  <div class="chat-container" style="width: 1000px;height: 600px">
    <div class="chat-box">
      <div class="messages" ref="messageContainer">
        <div v-for="(message, index) in messages" :key="index"
             :class="['message', message.role === 'user' ? 'user-message' : 'ai-message']">
          <el-avatar :icon="message.role === 'user' ? UserFilled : Service"
                     :class="message.role === 'user' ? 'user-avatar' : 'ai-avatar'" />
          <div class="message-content">{{ message.content }}</div>
        </div>
      </div>
      <div class="input-area">
        <el-input
            v-model="userInput"
            type="textarea"
            :rows="3"
            placeholder="请输入您的问题..."
            @keyup.enter.ctrl="sendMessage"
        />
        <el-button type="primary" :loading="loading" @click="sendMessage">
          发送 (Ctrl + Enter)
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue';
import { UserFilled, Service } from '@element-plus/icons-vue';
import main from "@/api/DeepSeekApi";
import { ElMessage } from "element-plus";

export default {
  name: 'Chat',
  setup() {
    const messages = ref([]);
    const userInput = ref('');
    const loading = ref(false);
    const messageContainer = ref(null);

    const scrollToBottom = async () => {
      await nextTick();
      const container = messageContainer.value;
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    };

    const sendMessage = async () => {
      if (!userInput.value.trim() || loading.value) return;

      // 添加用户消息
      messages.value.push({
        role: 'user',
        content: userInput.value.trim()
      });

      loading.value = true;
      try {
        // 调用 API
        const response = await main(userInput.value.trim());

        // 添加 AI 回复
        messages.value.push({
          role: 'assistant',
          content: response
        });

        userInput.value = '';
        await scrollToBottom();
      } catch (error) {
        console.error('发送消息失败:', error);
        ElMessage.error('发送消息失败，请重试');
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      // 添加欢迎消息
      messages.value.push({
        role: 'assistant',
        content: '你好！我是 AI 助手，有什么我可以帮你的吗？'
      });
    });

    return {
      messages,
      userInput,
      loading,
      messageContainer,
      scrollToBottom,
      sendMessage,
      UserFilled,
      Service
    };
  }
};
</script>

<style scoped>
.chat-container {
  display: flex;
  justify-content: center;
  padding: 20px;
  height: calc(100vh - 80px);
}

.chat-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #dcdfe6;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.message {
  display: flex;
  margin-bottom: 20px;
  align-items: flex-start;
}

.user-message {
  flex-direction: row-reverse;
}

.message-content {
  margin: 0 12px;
  padding: 12px;
  border-radius: 8px;
  max-width: 70%;
  word-wrap: break-word;
}

.user-message .message-content {
  background-color: #409eff;
  color: white;
}

.ai-message .message-content {
  background-color: #f4f4f5;
  color: #333;
}

.input-area {
  padding: 20px;
  border-top: 1px solid #dcdfe6;
  display: flex;
  gap: 10px;
}

.input-area .el-textarea {
  flex: 1;
}

.user-avatar {
  background-color: #409eff;
  color: white;
}

.ai-avatar {
  background-color: #67c23a;
  color: white;
}
</style>