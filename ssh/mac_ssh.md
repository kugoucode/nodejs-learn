# Mac 电脑配置ssh，使其一天生效

## 修改配置文件

``` bash
~/.ssh/config
```

## 配置文件中代码

``` bash
# 历史配置
#Host *
#ControlPath ~/.ssh/master-%r@%h:%p
#ControlPath /tmp/ssh_mux_%h_%p_%r
#ControlMaster auto

# 最新配置 ssh 到门神，后续不再需要输入登录门神的密码
ServerAliveInterval 60
host *
ControlMaster auto
ControlPath ~/.ssh/master-%r@%h:%p
ControlPersist yes

```
