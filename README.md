# 开发指南

## 建立个人分支
先从主仓库中 fork 代码到自己的个人仓库中

## 通过gitmodules拉取子包
命令：git submodule add "你的仓库链接如：https://github.com/sulgweb/leafer-in.git" src/common/in

## 安装依赖
pnpm i

## 启动
pnpm run dev

## 提交pr
提交代码到自己的个人分支，然后向主仓库发起 pr
