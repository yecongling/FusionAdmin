/**
 * 用户模型
 */
export interface UserModel {
  /**
   * 用户ID
   */
  id: string;

  /**
   * 用户名
   */
  username: string;

  /**
   * 真实姓名
   */
  realName: string;

  /**
   * 用户头像
   */
  avatar: string;

  /**
   * 电子邮件
   */
  email: string;

  /**
   * 电话号码
   */
  phone: string;

  /**
   * 性别
   */
  sex: string;

  /**
   * 状态
   */
  status: string;

  /**
   * 删除标志
   */
  delFlag: string;

  /**
   * 创建者
   */
  createBy: string;

  /**
   * 创建时间
   */
  createTime: string;

  /**
   * 更新者
   */
  updateBy: string;

  /**
   * 更新时间
   */
  updateTime: string;

  /**
   * 角色ID
   */
  roleId: string;
}
