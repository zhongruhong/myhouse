/*
 * class="btn btn-primary"  btn-primary是样式变量 ，得绑定样式选择变量
 * :class="'btn-'+color"
 * required 必传选项
 * validator  自定义认证的方法   函数参数就是验证props
 * props:null 不验证类型
 */
Vue.component('Button',{
	props:{
		color:{
			type:String,
//			required:true,
			default:'danger'
		},
		size:{
			type:String
//			validator(value){			
//				return value==='lg' || value ==='sm' || value === 'xs'
//			}
		},
	 value: [Number, String, Array, Date, Object, Function, Symbol]
	},
	/*
	 *  <button class="btn" :class="['btn-'+color,'btn-'+size]">
	 * 
	 */
	template:`
		 <button class="btn" :class="['btn-'+color,{
		 	'btn-lg': size === 'lg',
		 	'btn-sm': size === 'sm',
		 	'btn-xs': size === 'xs'
		 }]">
	  {{color}}
	  <!-- 在模板中改变值使用插槽 -->
	   <slot></slot> 
	  </button>
	
	`
})