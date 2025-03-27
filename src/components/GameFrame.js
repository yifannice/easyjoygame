"use client";

/**
 * GameFrame component for EasyJoy platform
 * Responsible for embedding games via iframes with:
 * - itch.io style game embedding with centered layout
 * - Loading indicators
 * - Fullscreen toggle
 * - Error handling
 */
import { useState, useEffect, useRef } from 'react';

export default function GameFrame({ game }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef(null);
  const iframeRef = useRef(null);

  // Handle iframe events
  const handleIframeLoad = () => {
    console.log("Game iframe loaded successfully");
    setIsLoading(false);
    
    // 尝试设置iframe容器的样式以匹配游戏内容
    try {
      // 使用setTimeout确保游戏内容已完全加载
      setTimeout(() => {
        if (iframeRef.current && containerRef.current) {
          // 移除最小高度限制，让容器自然调整
          containerRef.current.style.minHeight = 'unset';
          
          // 为容器添加aspect-ratio属性，保持游戏宽高比
          const aspectRatio = (game.width || 960) / (game.height || 640);
          containerRef.current.style.aspectRatio = `${aspectRatio}`;
        }
      }, 500);
    } catch (e) {
      console.error("无法调整iframe容器", e);
    }
  };

  const handleIframeError = () => {
    console.error("Error loading game iframe");
    setIsLoading(false);
    setHasError(true);
  };

  // 计算宽高比
  const aspectRatio = (game.height / game.width) * 100;

  return (
    <div className="w-full flex justify-center bg-black">
      {/* 游戏容器 - 限制最大宽度并居中 */}
      <div 
        className="relative overflow-hidden"
        style={{ 
          width: '100%',
          maxWidth: `${game.width || 960}px`,
          // 初始最小高度，加载后会被动态移除
          minHeight: isLoading ? '400px' : 'unset',
          // 使用padding-bottom技术创建响应式容器
          paddingBottom: `${aspectRatio}%` 
        }}
        ref={containerRef}
      >
        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 z-10">
            <div className="text-white text-center">
              <svg className="animate-spin h-10 w-10 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p>Loading game...</p>
            </div>
          </div>
        )}

        {/* Error message */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 z-10">
            <div className="text-white text-center p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-lg font-bold">Failed to load game</p>
              <p className="mt-1">Please try refreshing the page</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Refresh
              </button>
            </div>
          </div>
        )}

        {/* Game iframe - 参考itch.io的实现方式 */}
        <div className="absolute inset-0">
          <iframe
            ref={iframeRef}
            src={game.iframeUrl}
            title={game.title}
            className="w-full h-full border-0"
            allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share"
            scrolling="no"
            allowTransparency="true"
            frameBorder="0"
            id="game_frame"
            allowFullScreen
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            msallowfullscreen="true"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
          ></iframe>
        </div>

        {/* Fullscreen button overlay */}
        <button 
          onClick={() => {
            const iframe = iframeRef.current;
            if (iframe) {
              if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
              } else if (iframe.webkitRequestFullscreen) {
                iframe.webkitRequestFullscreen();
              } else if (iframe.mozRequestFullScreen) {
                iframe.mozRequestFullScreen();
              } else if (iframe.msRequestFullscreen) {
                iframe.msRequestFullscreen();
              }
            }
          }}
          className="absolute bottom-4 right-4 bg-gray-800 bg-opacity-70 text-white rounded-full p-2 hover:bg-opacity-100 transition-colors z-20"
          title="全屏"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
          </svg>
        </button>
      </div>
    </div>
  );
} 