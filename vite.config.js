import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        hello: "hello.html",
        counter: "counter.html",
        sayHello: "say-hello.html",
        tryStyle: "style.html",
        score: "score.html",
        todo: "todo.html",
        contact: "contact.html",
        product: "product.html",
        note: "note.html",
      }
    }
  }
})
