<style scoped>

  @import "/static/simplify/bootstrap/css/bootstrap.min.css";
	
	@import "/static/simplify/css/font-awesome.min.css";

	@import "/static/simplify/css/ionicons.min.css";
	
	@import "/static/simplify/css/simplify.min.css";

.layout-copy{
        padding: 0 0 5px;
        color: #9ea7b4;
        position: flex;
        bottom: 0;
        margin-bottom: 5px;
        margin-left: 570px;

    }

</style>
<template>	
  	<div class="overflow-hidden">
		<div class="wrapper preload">
			<div class="sidebar-right">
				<div class="sidebar-inner scrollable-sidebar">
					<div class="sidebar-header clearfix">
						<input class="form-control dark-input" placeholder="Search" type="text">
						<div class="btn-group pull-right">
							<a href="#" class="sidebar-setting" data-toggle="dropdown"><i class="fa fa-cog fa-lg"></i></a>
							<ul class="dropdown-menu pull-right flipInV">
								<li><a href="#"><i class="fa fa-circle text-danger"></i><span class="m-left-xs">Busy</span></a></li>
								<li><a href="#"><i class="fa fa-circle-o"></i><span class="m-left-xs">Turn Off Chat</span></a></li>
							</ul>
						</div>
					</div>
				</div><!-- sidebar-inner -->
			</div><!-- sidebar-right -->

			<header class="top-nav">
				<div class="top-nav-inner">
					<div class="nav-header">
						<button type="button" class="navbar-toggle pull-left sidebar-toggle" id="sidebarToggleSM">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						
						<ul class="nav-notification pull-right">
							<li>
								<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-cog fa-lg"></i></a>
								<span class="badge badge-danger bounceIn">1</span>
								<ul class="dropdown-menu dropdown-sm pull-right">
									<li class="user-avatar">
										<img src="/static/profile2.jpg" alt="" class="img-circle">
										<div class="user-content">
											<h5 class="no-m-bottom">John Doe</h5>
											<div class="m-top-xs">
												<a href="profile.html" class="m-right-sm">Profile</a>
												<a href="signin.html">Log out</a>
											</div>
										</div>
									</li>	  
									<li>
										<a href="inbox.html">
											Inbox
											<span class="badge badge-danger bounceIn animation-delay2 pull-right">1</span>
										</a>
									</li>			  
									<li>
										<a href="#">
											Notification
											<span class="badge badge-purple bounceIn animation-delay3 pull-right">2</span>
										</a>
									</li>			  
									<li>
										<a href="#" class="sidebarRight-toggle">
											Message
											<span class="badge badge-success bounceIn animation-delay4 pull-right">7</span>
										</a>
									</li>			  	  
									<li class="divider"></li>
									<li>
										<a href="#">Setting</a>
									</li>			  	  
								</ul>
							</li>
						</ul>
						
            <router-link  to="shouye">
						<div class="brand" style="padding-left: 0px; padding-right: 0px; height: 53px">
							<img src = "/static/weibo.jpg" width="18%" height="70%" style="vertical-align: middle" />
              <span class="brand-name" style="margin-left: 0px; font-size: 25px;">Expert System</span>
						</div>
            </router-link>
					</div>
					<div class="nav-container">
						<button type="button" class="navbar-toggle pull-left sidebar-toggle" id="sidebarToggleLG">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<ul class="nav-notification">	
							<li class="search-list">
								<div class="search-input-wrapper">
									<div class="search-input">
										<input type="text" class="form-control input-sm inline-block">
										<a href="#" class="input-icon text-normal"><i class="ion-ios7-search-strong"></i></a>
									</div>
								</div>
							</li>
						</ul>
						<div class="pull-right m-right-sm">
							<div class="user-block hidden-xs">
								<a href="#" id="userToggle" data-toggle="dropdown">
									<img src="/static/profile2.jpg" alt="" class="img-circle inline-block user-profile-pic">
									<div class="user-detail inline-block">
										Xinyu26
										<i class="fa fa-angle-down"></i>
									</div>
								</a>
								<div class="panel border dropdown-menu user-panel">
									<div class="panel-body paddingTB-sm">
										<ul>
											<li>
												<a href="profile.html">
													<i class="fa fa-edit fa-lg"></i><span class="m-left-xs">My Profile</span>
												</a>
											</li>
											<li>
												<a href="inbox.html">
													<i class="fa fa-inbox fa-lg"></i><span class="m-left-xs">Inboxes</span>
													<span class="badge badge-danger bounceIn animation-delay3">2</span>
												</a>
											</li>
											<li>
												<a href="signin.html">
													<i class="fa fa-power-off fa-lg"></i><span class="m-left-xs">Sign out</span>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<ul class="nav-notification">
								
								<li>
									<a href="#" data-toggle="dropdown"><i class="fa fa-bell fa-lg"></i></a>
									<span class="badge badge-info bounceIn animation-delay6 active">4</span>
									<ul class="dropdown-menu notification dropdown-3 pull-right">
										<li><a href="#">You have 5 new notifications</a></li>					  
										<li>
											<a href="#">
												<span class="notification-icon bg-warning">
													<i class="fa fa-warning"></i>
												</span>
												<span class="m-left-xs">Server #2 not responding.</span>
												<span class="time text-muted">Just now</span>
											</a>
										</li>
										<li>
											<a href="#">
												<span class="notification-icon bg-success">
													<i class="fa fa-plus"></i>
												</span>
												<span class="m-left-xs">New user registration.</span>
												<span class="time text-muted">2m ago</span>
											</a>
										</li>
										<li>
											<a href="#">
												<span class="notification-icon bg-danger">
													<i class="fa fa-bolt"></i>
												</span>
												<span class="m-left-xs">Application error.</span>
												<span class="time text-muted">5m ago</span>
											</a>
										</li>
										<li>
											<a href="#">
												<span class="notification-icon bg-success">
													<i class="fa fa-usd"></i>
												</span>
												<span class="m-left-xs">2 items sold.</span>
												<span class="time text-muted">1hr ago</span>
											</a>
										</li>
										<li>
											<a href="#">
												<span class="notification-icon bg-success">
													<i class="fa fa-plus"></i>
												</span>
												<span class="m-left-xs">New user registration.</span>
												<span class="time text-muted">1hr ago</span>
											</a>
										</li>
										<li><a href="#">View all notifications</a></li>					  
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div><!-- ./top-nav-inner -->	
			</header>
			<aside class="sidebar-menu fixed">
				<div class="sidebar-inner scrollable-sidebar" >
					<div class="main-menu">
						<ul class="accordion">
							<li class="menu-header">
								Main Menu
							</li>
              <li class="bg-palette1">
                <router-link  to="shouye">
                  <span class="menu-content block">
                    <span class="menu-icon"><i class="block fa fa-home fa-lg"></i></span>
                    <span class="text m-left-sm" style="font-size: 15px">首页</span>
                  </span>
                  <span class="menu-content-hover block">
                    Home
                  </span>
                </router-link>
              </li>
							<li class="openable bg-palette3">
								<a href="#">
									<span class="menu-content block">
										<span class="menu-icon"><i class="block fa fa-list fa-lg"></i></span>
										<span class="text m-left-sm" style="font-size: 15px">用户</span>
										<span class="submenu-icon"></span>
									</span>
									<span class="menu-content-hover block">
										Form
									</span>
								</a>
								<ul class="submenu bg-palette4" >
									<li><router-link to="query"><span class="submenu-label"  style="font-size: 13px">query列表</span></router-link></li>
									<li><router-link to="answer"><span class="submenu-label" style="font-size: 13px" >query问答</span></a></router-link></li>
									<li><router-link to="feedback"><span class="submenu-label"  style="font-size: 13px">反馈</span></a></router-link></li>
								</ul>
							</li>
							<li class="openable bg-palette4">
								<a href="#">
									<span class="menu-content block">
										<span class="menu-icon"><i class="block fa fa-tags fa-lg"></i></span>
										<span class="text m-left-sm" style="font-size: 15px">专家</span>
										<span class="submenu-icon"></span>
									</span>
									<span class="menu-content-hover block">
										UI Kits
									</span>
								</a>
								<ul class="submenu">
									<li><router-link to="addTree"><span class="submenu-label" style="font-size: 13px">添加树</span></router-link></li>
									<li><router-link to="todoList"><span class="submenu-label" style="font-size: 13px">反馈待办</span></router-link></li>
									
								</ul>
							</li>

						</ul>
					</div>	
					<div class="sidebar-fix-bottom clearfix">
						<div class="user-dropdown dropup pull-left">
							<a href="#" class="dropdwon-toggle font-18" data-toggle="dropdown"><i class="ion-person-add"></i>
							</a>
							<ul class="dropdown-menu">
								<li>
									<a href="inbox.html">
										Inbox
										<span class="badge badge-danger bounceIn animation-delay2 pull-right">1</span>
									</a>
								</li>			  
								<li>
									<a href="#">
										Notification
										<span class="badge badge-purple bounceIn animation-delay3 pull-right">2</span>
									</a>
								</li>			  
								<li>
									<a href="#" class="sidebarRight-toggle">
										Message
										<span class="badge badge-success bounceIn animation-delay4 pull-right">7</span>
									</a>
								</li>			  	  
								<li class="divider"></li>
								<li>
									<a href="#">Setting</a>
								</li>			  	  
							</ul>
						</div>
						<a href="lockscreen.html" class="pull-right font-18"><i class="ion-log-out"></i></a>
					</div>
				</div><!-- sidebar-inner -->
			</aside>
			
			<div class="main-container">
				<div class="padding-md">
					<router-view/>
				</div><!-- ./padding-md -->
			</div><!-- /main-container -->
		</div><!-- /wrapper -->
    

		<a href="#" class="scroll-to-top hidden-print"><i class="fa fa-chevron-up fa-lg"></i></a>
		<!--
    			<div class="layout-copy">
                    Copyright &copy; 2009-2017 WEIBO 北京微梦创科网络技术有限公司
                </div>
                -->
	</div>

	</template>

	<script>
    export default {
    }
	</script>
