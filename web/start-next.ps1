# start-next.ps1

# 检查 yarn 是否已安装
if (-not (Get-Command yarn -ErrorAction SilentlyContinue)) {
    Write-Error "Yarn is not installed. Please install Yarn first."
    exit 1
}

# 设置端口
$port = 3001

# 启动 Next.js 开发服务器
yarn dev -p $port
