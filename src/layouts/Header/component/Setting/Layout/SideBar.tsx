import NumberItem from '../NumberItem';
import SwitchItem from '../SwitchItem';

/**
 * 侧边栏
 */
const SideBar: React.FC = () => {
  return (
    <>
      {/* 显示侧边栏 */}
      <SwitchItem title="显示侧边栏" />
      {/* 折叠菜单 */}
      <SwitchItem title="折叠菜单" />
      {/* 鼠标悬停展开 */}
      <SwitchItem title="鼠标悬停展开" />
      {/* 自动激活子菜单 */}
      <SwitchItem title="自动激活子菜单" />
      {/* 宽度 */}
      <NumberItem title="宽度"/>
    </>
  );
};
export default SideBar;
