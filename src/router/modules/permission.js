export default {
  path:"/permission",
  component:()=>import('@/layout'),
  name:"permission",
  children:[
    {
      path:"",
      component:()=> import("@/views/permission"),
      meta:{title:"权限管理",icon:"lock"}
    }
  ]
}
