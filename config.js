window.PROD_CONFIG = {
  BASE_URL: window.location.protocol + '\/\/' + window.location.host,
  ISALIENV: true, // 需要部署到阿里云环境需要将这个值改为true
  portalMessageSendDomain: 'http://ips-test-nation-cq.hsip.gov.cn/' // 如果放在阿里云环境，需要配置成对应门户子系统的域名:端口
}