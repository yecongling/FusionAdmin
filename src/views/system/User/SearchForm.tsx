import { SearchOutlined, RedoOutlined } from '@ant-design/icons';
import { Button, Card, Col, ConfigProvider, Form, Input, Row, Select, Space } from 'antd';
import type { UserSearchParams } from './types';

interface SearchFormProps {
  onSearch: (values: UserSearchParams) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [form] = Form.useForm();

  const handleReset = () => {
    form.resetFields();
    onSearch(form.getFieldsValue());
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            itemMarginBottom: 0,
          },
        },
      }}
    >
      <Card>
        <Form form={form} onFinish={onSearch}>
          <Row gutter={24}>
            <Col span={6}>
              <Form.Item name="username" label="用户名" colon={false}>
                <Input autoFocus allowClear autoComplete="off" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="sex" label="性别" colon={false}>
                <Select
                  allowClear
                  options={[
                    { value: '', label: '请选择', disabled: true },
                    { value: 1, label: '男' },
                    { value: 2, label: '女' },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="status" label="状态" colon={false}>
                <Select
                  allowClear
                  options={[
                    { value: '', label: '请选择', disabled: true },
                    { value: 1, label: '启用' },
                    { value: 0, label: '停用' },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={6} style={{ textAlign: 'right' }}>
              <Space>
                <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
                  检索
                </Button>
                <Button type="default" icon={<RedoOutlined />} onClick={handleReset}>
                  重置
                </Button>
              </Space>
            </Col>
          </Row>
        </Form>
      </Card>
    </ConfigProvider>
  );
};

export default SearchForm;
