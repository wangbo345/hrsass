export default {
  path:"/salarys",
  component:()=>import('@/layout'),
  name:"salarys",
  children:[
    {
      path:"",
      component:()=> import("@/views/salarys"),
      meta:{title:"工资",icon:"money"}
    }
  ]
}
