const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot4962b/",
            name: "springboot4962b",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot4962b/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "休闲娱乐代理售票系统"
        } 
    }
}
export default base
