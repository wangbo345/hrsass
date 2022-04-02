export default {
  path:"/employees",
  component:()=>import('@/layout'),
  name:"employees",
  children:[
    {
      path:"",
      component:()=> import("@/views/employees"),
      meta:{title:"员工管理",icon:"people"}
    }
  ]
}
