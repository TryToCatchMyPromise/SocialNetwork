import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons'
import {Breadcrumb, Layout, Menu} from 'antd'
import 'antd/dist/antd.css'
import {FC, useEffect} from 'react'
import {Link, Redirect, Route, Switch} from 'react-router-dom'
import {useInitialized} from 'src/hooks/useInitialized'
import {useLazy} from 'src/hooks/useLazy'
import './App.css'
import Preloader from './components/common/Preloader/Preloader'
import {Header} from './components/Header/Header'
import {LoginPage} from './components/Login/Login'
import {UsersPage} from './components/Users/UsersContainer'

const {SubMenu} = Menu
const {Content, Footer, Sider} = Layout

export const App: FC = () => {

  const {initialized} = useInitialized()
  const {SuspendedDialogs, SuspendedProfile, SuspendedChatPage} = useLazy()

  useEffect(() => {
    const catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
      alert('Some error occurred')
    }
    window.addEventListener('unhandledrejection', catchAllUnhandledErrors)
    return window.removeEventListener('unhandledrejection', catchAllUnhandledErrors)
  }, [])

  if (!initialized) {
    return <Preloader/>
  }
  return (
    <Layout>
      <Header/>
      <Content style={{padding: '0 50px'}}>
        <Breadcrumb style={{margin: '16px 0'}}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background" style={{padding: '24px 0'}}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              style={{height: '100%'}}
            >
              <SubMenu key="sub1" icon={<UserOutlined/>} title="My Profile">
                <Menu.Item key="1"> <Link to="/profile">Profile</Link></Menu.Item>
                <Menu.Item key="2"> <Link to="/dialogs">Messages</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Developers">
                <Menu.Item key="5"><Link to="/developers">Developers</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined/>} title="Chat and other">
                <Menu.Item key="9"><Link to="/chat">Chat</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{padding: '0 24px', minHeight: 280}}>
            <Switch>
              <Route exact path="/"
                     render={() => <Redirect to={'/profile'}/>}/>

              <Route path="/dialogs"
                     render={() => <SuspendedDialogs/>}/>

              <Route path="/profile/:userId?"
                     render={() => <SuspendedProfile/>}/>

              <Route path="/developers"
                     render={() => <UsersPage pageTitle={'Самураи'}/>}/>

              <Route path="/login"
                     render={() => <LoginPage/>}/>

              <Route path="/chat"
                     render={() => <SuspendedChatPage/>}/>

              <Route path="*"
                     render={() => <div>404 NOT FOUND</div>}/>
            </Switch>
          </Content>
        </Layout>
      </Content>
      <Footer style={{textAlign: 'center'}}>Social Network ©2021 Created by glebsapegin</Footer>
    </Layout>
  )


}
