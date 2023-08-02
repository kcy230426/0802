var app = require('express')(); 
// express 모듈을 실행하고 app이라는 이름으로 저장해라.

const PORT = process.env.PORT || 2189;

app.get('/',(req,res)=>{
    res.send('주소창에 localhost:5767 로 요청이 와서 이 문자를 보내줘서 띄워줄게')
})

app.get('/company',(req,res)=>{
    res.send('회사소개')
})

app.get('/gogo',(req,res)=>{
    res.send('오오오')
})

app.get('/mapinfo',(req,res)=>{
    res.send('오시는 길 안내')
})

app.get('/where', (req,res)=>{
    res.send('여기가 도착지점')
})

app.get('/way',(req,res)=>{
    res.send('오시는길')
})

app.listen(PORT,()=>{
    console.log('콘솔에서 시간으로 확인해보면 바로 어쩌구저쩌구')
})

app.set('port',8080)
// port는 8080으로 / localhost:8080
app.post('/', (req, res) =>{  res.send(' / 루트요청 있었음'); })
// localhost:8080/ 로 요청하면 " / 루트요청 있었음 " 이라고 화면에 띄워줌 

app.listen(app.get('port'), () =>{
    console.log('콘솔에서 시간으로 확인해보면 바로 알게됨');
})

// 서버는 듣겠다. 8080에 대한 요청이 발생시 콘솔창에 아래의 메세지 출력.

