import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Layout, Menu, Avatar, Tabs, Button, Input, Form, TreeSelect, Dropdown } from 'antd';
import { UserOutlined, SearchOutlined, DownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/movie.png';
const { Header, Content } = Layout;
const { TabPane } = Tabs;
interface Region {
  title: string;
  value: string;
  children?: Region[];
}

interface AccountUpdateValues {
  [key: string]: string;
}

interface PasswordChangeValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const AccountInfo: React.FC = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string>('accountInfo');
  const [selectedRegion, setSelectedRegion] = useState<{ label: React.ReactNode; value: string } | undefined>(undefined);
  const [vietNamRegions, setVietNamRegions] = useState<Region[]>([]);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await axios.get('https://provinces.open-api.vn/api/p');
        interface Ward {
          name: string;
          code: string;
        }
        
        interface District {
          name: string;
          code: string;
          wards: Ward[];
        }
        
        interface Province {
          name: string;
          code: string;
          districts: District[];
        }
        
        const formattedRegions: Region[] = response.data.map((province: Province) => ({
          title: province.name,
          value: province.code,
          children: province.districts.map((district: District) => ({
            title: district.name,
            value: district.code,
            children: district.wards.map((ward: Ward) => ({
              title: ward.name,
              value: ward.code,
            })),
          })),
        }));
        
        setVietNamRegions(formattedRegions);
      } catch (error) {
        console.error('Error fetching regions:', error);
      }
    };

    fetchRegions();
  }, []);

  const handleAccountUpdate = (values: AccountUpdateValues) => {
    console.log('Account Update Values:', values);
    console.log('Selected Region:', selectedRegion);
  };

  const handlePasswordChange = (values: PasswordChangeValues) => {
    console.log('Password Change Values:', values);
  };

  const handleMenuClick = (e: { key: string }) => {
    setSelectedOption(e.key);
  };

  const handleRegionChange = (value: { label: React.ReactNode; value: string }) => {
    setSelectedRegion(value);
  };

  const accountMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="accountInfo">Thông tin tài khoản</Menu.Item>
      <Menu.Item key="changePassword">Đổi mật khẩu</Menu.Item>
    </Menu>
  );

  const accountTabTitle = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      <span>Tài khoản</span>
      <Dropdown overlay={accountMenu} trigger={['click']}>
        <Button type="link" style={{ padding: 0 }}>
          <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );

  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" style={{ height: '40px', marginRight: '20px' }} />
        <div className="logo" style={{ color: 'red', fontSize: '30px', fontWeight: 'bolder', marginRight: '20px' }}>
          Củ Tỏi
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ flexGrow: 1 }}>
          <Menu.Item key="1">Đặt vé phim chiếu rạp</Menu.Item>
          <Menu.Item key="2">Lịch chiếu</Menu.Item>
          <Menu.Item key="3">Phim</Menu.Item>
          <Menu.Item key="4">Rạp</Menu.Item>
          <Menu.Item key="5">Tin tức</Menu.Item>
          <Menu.Item key="6">Cộng đồng</Menu.Item>
        </Menu>
        <Input
          placeholder="Từ khóa tìm kiếm..."
          prefix={<SearchOutlined />}
          style={{ width: 200, marginLeft: '20px' }}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ margin: '20px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar size={64} icon={<UserOutlined />} />
            <div style={{ marginLeft: '15px' }}>
              <h2>dminh03</h2>
              <span style={{ color: 'green' }}>0 đ</span>
            </div>
          </div>
          <Tabs defaultActiveKey="1" style={{ marginTop: '20px' }}>
            <TabPane tab={accountTabTitle} key="1">
              {selectedOption === 'accountInfo' && (
                <Form layout="vertical" onFinish={handleAccountUpdate}>
                  <Form.Item label="Tên tài khoản">
                    <Input placeholder="Tên tài khoản" />
                  </Form.Item>
                  <Form.Item label="Email">
                    <Input placeholder="Email" />
                  </Form.Item>
                  <Form.Item label="Họ và tên">
                    <Input placeholder="Họ và tên" />
                  </Form.Item>
                  <Form.Item label="Số điện thoại">
                    <Input placeholder="Số điện thoại" />
                  </Form.Item>
                  <Form.Item label="Khu vực">
                    <TreeSelect
                      style={{ width: '100%' }}
                      treeData={vietNamRegions}
                      placeholder="Chọn khu vực"
                      treeDefaultExpandAll
                      onChange={handleRegionChange}
                      value={selectedRegion}
                      labelInValue
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Cập nhật
                    </Button>
                  </Form.Item>
                </Form>
              )}
              {selectedOption === 'changePassword' && (
                <Form layout="vertical" onFinish={handlePasswordChange}>
                  <Form.Item
                    label="Mật khẩu hiện tại"
                    name="currentPassword"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu hiện tại!' }]}
                  >
                    <Input.Password placeholder="Mật khẩu hiện tại" />
                  </Form.Item>
                  <Form.Item
                    label="Mật khẩu mới"
                    name="newPassword"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu mới!' }]}
                  >
                    <Input.Password placeholder="Mật khẩu mới" />
                  </Form.Item>
                  <Form.Item
                    label="Xác minh"
                    name="confirmPassword"
                    rules={[{ required: true, message: 'Vui lòng xác minh mật khẩu!' }]}
                  >
                    <Input.Password placeholder="Xác minh" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Đổi mật khẩu
                    </Button>
                  </Form.Item>
                </Form>
              )}
            </TabPane>
            <TabPane tab="Tủ phim" key="2">
              <p>Tủ phim của bạn đang trống</p>
            </TabPane>
            <TabPane tab="Vé" key="3">
              <p>
                Bạn chưa có giao dịch nào trước đây.<br />
                Để bắt đầu mua vé xem phim, vui lòng làm theo các bước sau:<br />
                Bước 1 : Chọn suất chiếu<br />
                Bước 2 : Chọn ghế<br />
                Bước 3 : Thanh toán
              </p>
            </TabPane>
            <TabPane tab="Nạp tiền" key="4">
              <p>
                Bạn chưa có giao dịch nạp tiền nào.<br />
                Nếu muốn thực hiện giao dịch hãy nhấn vào
                <Button type="link" style={{ padding: 4, margin: -1 }} onClick={() => navigate('/form')}>
                  đây
                </Button>.
              </p>
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
};

export default AccountInfo;
