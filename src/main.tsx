import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3b82f6",
          borderRadius: 8,
          fontFamily: "Outfit, sans-serif",
        },
        components: {
          Card: {
            colorBgContainer: 'rgba(30, 58, 138, 0.2)',
            colorBorder: 'rgba(59, 130, 246, 0.2)',
          },
          Input: {
            colorBgContainer: 'transparent',
            colorText: '#ffffff',
            colorTextPlaceholder: '#9ca3af',
          },
          Button: {
            colorPrimary: '#ffffff',
            colorPrimaryHover: '#f3f4f6',
          }
        }
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);