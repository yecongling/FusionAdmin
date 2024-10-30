import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { checkRouterAuth } from './checkRouterAuth';

/**
 * 前置路由拦截（判定用户是否 处于登录状态）
 * @returns
 */
const RouterBeforeEach: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 检测当前路径
    const obj = checkRouterAuth(location.pathname);
    // 判断是否登录
    const bLogin = sessionStorage.getItem('isLogin');
    // 这里需要添加判定，如果是已登录状态，且访问根路径，则直接导向到首页
    if (location.pathname === '/' && bLogin) {
      const index = sessionStorage.getItem('homePath') || '/home';
      navigate(index);
    } else if (bLogin == 'false' || !bLogin || location.pathname === '/') {
      // 未登录状态或登录状态已失效，则跳转到登录页面
      navigate('/login', { replace: true });
    } else {
      if (!obj && location.pathname !== '404') {
        navigate('/404');
      }
    }
  }, []);
  return <Outlet />;
};
export default RouterBeforeEach;