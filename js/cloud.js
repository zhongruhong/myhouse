vm.component('Icon',{
	props:{
		name:{
			type:String
		},
		size:{
			type:Number
		},
		color:{
			type:String
		},
		value: [Number, String, Array, Date, Object, Function, Symbol]
	},
	template: `
        <Icon class="btn" >
 
         {{value}}
            <slot></slot>
        </Icon>
    `
})
