/**
 * 防抖函数
 *
 * 在连续的事件触发中，只在事件停止触发后经过指定的延迟时间后执行一次。
 *
 * @param func - 需要防抖处理的函数
 * @param wait - 延迟时间（毫秒）
 * @param immediate - 是否在延迟开始前立即调用
 * @returns 防抖处理后的函数
 */
export function debounce<Params extends any[]>(
  func: (...args: Params) => void,
  wait: number,
  immediate: boolean = false
): (...args: Params) => void {
  let timeout: ReturnType<typeof setTimeout> | null;

  return function (this: any, ...args: Params) {
    const context = this;

    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}
