function fn(){
  karate.configure('connectTimeout', 500000);
  karate.configure('readTimeout', 500000);
 config = {
    urlBase : 'https://api-payment.getsandbox.com:443'
    }
karate.log('get variable from karate-config => ', config)
return config;
}