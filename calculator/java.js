
$( ()=>{

	CreateAndTakeVar();

} );

var FormulaHolder;
var click=0;
var body,CalHolder,BtnHolder,Btn1,Btn2;
var h1,x,y;
function CreateAndTakeVar() {
	body=$('body');	
	x=window.innerWidth;
	y=window.innerHeight;

	$(body).css({width:x-10,height:y-30,background:'lightblue',});

	body.append('<div id="CalHolder"><h1>Calculator</h1>  </div> ');
	h1=$('h1');
	h1.css({ textAlign:'center'});

	CalHolder=$('#CalHolder');
	CalHolder.css({width:x/2+300,height:y/2+250,top:'2.5%',marginLeft:'auto',marginRight:"auto" , background:'gray',  });

	CalHolder.append('<div id="BtnHolder">Select Type:    <button class="Btn1">Normal Calculator</button> <button class="Btn2">Cylinder</button>  </div>');

	BtnHolder=$('#BtnHolder');
	BtnHolder.css({ background:'orange',fontSize:'22px',position:'absolute',width:x/2+280,height:'25px',padding:'10px'  });


	Btn1=$('.Btn1');
	Btn1.css({fontSize:'20px',background:'lightblue',marginLeft:'20px'  });

	Btn2=$('.Btn2');
	Btn2.css({fontSize:'20px',background:'lightblue',marginLeft:'20px'  });

	CreateEvents();

}

var loop=0;
var NumberHolder=22;

var Numbers=[];
var Operator=[];

function CreateEvents(){

	Btn1.on('click',CreateNormalCalculator );
	Btn2.on('click',CreateCylinderCalculator );
}
var All=[];
var num=[];
function CreateNormalCalculator(){

	if(loop==0 || loop==20){

		$(NumberHolder).remove();
		$(FormulaHolder).remove();
		loop=10;
		let fix=x/3.4;
		CalHolder.append('<input type="text" id="NumberHolder"></ >');
		NumberHolder=$('#NumberHolder');
		NumberHolder.css({position:'absolute', width:'250px',height:'75px',background:'red',top:'42%',left:x/2-120,textAlign:'center',fontSize:'20px'  })
		$(NumberHolder).val('Click Here to Calculate');
		$(NumberHolder).css({transition:'5s' });
		$(NumberHolder).on('click',()=>{
		Numbers=[];
	    num=[];
	    Operator=[];
		$(NumberHolder).val('');	
	    NumberHolder.css({position:'absolute',left:x/2-fix , width:x/2+100,height:'120px',background:'#44434a',top:'42%',textAlign:'center',fontSize:'24px',fontFamily:'Tahoma',color:'gold'  })

		})


		NumberHolder.on('change',()=>{
	    	All=[];
	    	num=[];
	    	All=NumberHolder.val().split('');
	    	
	    	let loop1=1;
			
	    	for(let i=0;i<All.length;i++){

	    		if(All[i] === "/"  ){
	    			Numbers.push(num);
	    			num="";
	    			Operator.push(All[i]);
	    		}if(All[i] === "+"  ){
	    			Numbers.push(num);
	    			num="";
	    			Operator.push(All[i]);	

	    		}if(All[i] === "*"  ){
	    			Numbers.push(num);
	    			num="";
	    			Operator.push(All[i]);

	    		}if(All[i] === "-"  ){
	    			Numbers.push(num);
	    			num="";
	    			Operator.push(All[i]);	
	    		}else{
	    			
	    			num+=All[i];

	    			if(loop1==All.length){
	    				Numbers.push(num);
	    			
	    			}else if(num==="-" || num==="+" || num==="*" || num==="/"  ){
	    				num="";

	    			}		
	    			
	    			
	    		}

	    		loop1++;
	    		
	    	}	
		    	
var Result;

function CalculateResult(){

		if(Numbers.length==1 ){
			Result=parseInt(Numbers[0]);
						
		}if(Numbers.length==2){
			Result=eval( ' '+Numbers[0]+' '+Operator[0]+'   '+Numbers[1]+'  ');	
					
		}if(Numbers.length==3){
			Result=eval( '   '+Numbers[0]+' '+Operator[0]+'   '+Numbers[1]+'  '+Operator[1]+'  '+Numbers[2]+'      ');	
					
		}if(Numbers.length==4){
			Result=eval( '   '+Numbers[0]+' '+Operator[0]+'   '+Numbers[1]+'  '+Operator[1]+'  '+Numbers[2]+'  '+Operator[2]+'  '+Numbers[3]+'    ');	
					
		}if(Numbers.length==5){
			Result=eval( '   '+Numbers[0]+' '+Operator[0]+'   '+Numbers[1]+'  '+Operator[1]+'  '+Numbers[2]+'  '+Operator[2]+'  '+Numbers[3]+' '+Operator[3]+' '+Numbers[4]+'  ');	
					
		}if(Numbers.length==6){
			Result=eval( '   '+Numbers[0]+' '+Operator[0]+'   '+Numbers[1]+'  '+Operator[1]+'  '+Numbers[2]+'  '+Operator[2]+'  '+Numbers[3]+' '+Operator[3]+' '+Numbers[4]+' '+Operator[4]+' '+Numbers[5]+'  ');	
					
		}if(Numbers.length==7){
			Result=eval( '   '+Numbers[0]+' '+Operator[0]+'   '+Numbers[1]+'  '+Operator[1]+'  '+Numbers[2]+'  '+Operator[2]+'  '+Numbers[3]+' '+Operator[3]+' '+Numbers[4]+' '+Operator[4]+' '+Numbers[5]+' '+Operator[5]+' '+Numbers[6]+'  ');	
					
		}if(Numbers.length==8){
			Result=eval( '   '+Numbers[0]+' '+Operator[0]+'   '+Numbers[1]+'  '+Operator[1]+'  '+Numbers[2]+'  '+Operator[2]+'  '+Numbers[3]+' '+Operator[3]+' '+Numbers[4]+' '+Operator[4]+' '+Numbers[5]+' '+Operator[5]+' '+Numbers[6]+' '+Operator[6]+' '+Numbers[7]+'  ');	
					
		}	

		
		NumberHolder.css({ color:'orange',fontSize:'66px' });	
	    NumberHolder.val(Result);		

	    	}

	    	CalculateResult()

	    })


		
	}


}


function CreateCylinderCalculator(){

	if(loop==0 || loop==10  ){
		click=0;
		loop=20;
		let fix=x/3.4;
		$(NumberHolder).remove();
		
		CalHolder.append( '<div id="FormulaHolder"></div>' );
		FormulaHolder=$('#FormulaHolder');
		FormulaHolder.css({position:'absolute', width:'250px',height:'75px',background:'red',top:'42%',left:x/2-120,textAlign:'center',fontSize:'20px'  })

		$(FormulaHolder).text('Click Here to Calculate');
		$(FormulaHolder).css({transition:'5s' });
		
		$(FormulaHolder).on('click',()=>{
		
			if(click==0){
		       $(FormulaHolder).text('');	
	           FormulaHolder.css({position:'absolute',left:x/2-fix , width:x/2+100,height:'300px',background:'black',top:'32%',textAlign:'center',fontSize:'24px',fontFamily:'Tahoma',color:'gold'  })
	           click++

	           setTimeout(Display,2000);
			}

		})

	function Display(){



		FormulaHolder.append(' <div id="CylinderResult">Result = </div>  ');
		FormulaHolder.append(' <div id="CylinderPi">PI</div>  ');
		FormulaHolder.append(' <div id="HHolder"><input type="text" id="CylinderH"  required> </>     </div>  ');
		FormulaHolder.append(' <div id="RHolder">  <input type="text" id="CylinderRadius" required> </>   </div>  ');

		FormulaHolder.append(' <div id="Operator1">*</div>  ');
		FormulaHolder.append(' <div id="Operator2">*</div>  ');

		var Operator1=$('#Operator1');
		var Operator2=$('#Operator2');
		var CylinderResult=$('#CylinderResult');
		var CylinderPi=$('#CylinderPi');
		var CylinderH=$('#CylinderH');
		var CylinderRadius=$('#CylinderRadius');
		var HHolder=$('#HHolder');
		var RHolder=$('#RHolder');

		
		CylinderH.val('Height');
		CylinderRadius.val("Radius");

		CylinderResult.css({position:'absolute', fontSize:'26px',width:'auto',height:'75px',marginTop:'150px',marginLeft:'15px' })
		CylinderPi.css({position:'absolute', fontSize:'26px',width:'100px',height:'75px',marginTop:'150px',marginLeft:'290px' })
		
		HHolder.css({textAlign:'center', position:'absolute', fontSize:'26px',width:'100px',height:'50px',marginTop:'142px',marginLeft:'420px',background:'gold' })
		CylinderH.css({position:'absolute', width:'100px',height:'45px',top:0,left:0,textAlign:'center',fontSize:'26px',background:'gold' })		
		
		RHolder.css({textAlign:'center',position:'absolute', fontSize:'26px',width:'100px',height:'50px',marginTop:'142px',marginLeft:'170px',background:'gold' })
		CylinderRadius.css({position:'absolute', width:'100px',height:'45px',top:0,left:0,textAlign:'center',fontSize:'26px',background:'gold' })	

		Operator1.css({position:'absolute', fontSize:'26px',width:'100px',height:'75px',marginTop:'155px',marginLeft:'250px' })
		Operator2.css({position:'absolute', fontSize:'26px',width:'100px',height:'75px',marginTop:'155px',marginLeft:'340px' })


		CylinderH.on('click',()=>{

			CylinderH.val('');
			CylinderResult.text("Result  =");
		} )

		CylinderRadius.on('click',()=>{

			CylinderRadius.val('');
			CylinderResult.text("Result  =");
		} )


		addEventListener('keydown',function CalR(e){

			let x1=CylinderRadius.val();
			let x2=3.14;
			let x3=CylinderH.val();		
			parseInt(x1);
			parseInt(x3);

			if(e.which==13){
				let res = (x1*x1) * 3.14 * x3;

				CylinderResult.text(res + ' = ' );
			}

		})


		}	


	}


}



