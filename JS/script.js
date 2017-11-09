var elem = document.getElementById('canvas');
    	var canvas = elem.getContext('2d');
    	elem.width=100;
    	elem.height=1000;

		koll=document.getElementById("kol");
		kol2=document.getElementById("kol1");

		del1=document.getElementById("del");
		delete1=document.getElementById("delet");

		delete1.onclick=function(){
			Del(del1.value);
		}

		function Del(obj){
				if(obj=="")return;
				
				if(mas[del1.value].style.display=='none')return;

					if(obj*2+1<koll.value&&mas[obj*2+1].style.display!="none"){
						obj=obj*2+1;
						Del(obj);
					}else
					if(obj*2+2<koll.value&&mas[obj*2+2].style.display!="none"){
						obj=obj*2+2;
						Del(obj);
					}
					else{
						x1=mas[obj].style.left;
		     			x1=x1.substring(0, x1.length-1 );
		     			x1=x1.substring(0, x1.length-1 );
		     			x1++;x1--;
		     			y1=mas[obj].style.top;
		     			y1=y1.substring(0, y1.length-1 );
		     			y1=y1.substring(0, y1.length-1 );
		     			y1++;y1--;
						mas[obj].style.display="none";

						if(obj%2!=0)
						obj=(obj-1)/2;
						else
							obj=(obj-2)/2;

						x=mas[obj].style.left;
		     			x=x.substring(0, x.length-1 );
		     			x=x.substring(0, x.length-1 );
		     			x++;x--;
		     			y=mas[obj].style.top;
		     			y=y.substring(0, y.length-1 );
		     			y=y.substring(0, y.length-1 );
		     			y++;y--;

		     			canvas.beginPath();
		     			canvas.moveTo(x+25,y);
		     			canvas.lineTo(x1+25,y1);
		     			 canvas.lineWidth = 3;
		   				canvas.strokeStyle = 'white';
		   				canvas.strokeStyle = 'white';
		    			canvas.stroke();

						Del(obj);
					}
		}

		var kol_em=koll.value;
		koll.onkeyup = function (event){
			if(event.keyCode == 10 || event.keyCode == 13){
				add();
			}
		}
		el=document.getElementById("bod");
		mas=new Array();
		x=0;
		y=0;
		ras=0;
		num=0;
		chet=1;
		id=0;
		sch=0;
		n=0;
		function add(){

			ras=koll.value*25;
			x=ras;
			elem.width=ras*2;
			elem.height=ras;
			for(i=0;i<koll.value;i++){

				if(num==chet){	
					a=mas[chet-1].style.left;
					a=a.substring(0, a.length-1 );//убераем х
					a=a.substring(0, a.length - 1);//убераем р
					a++;a--;
					ras=a;
					//alert(ras);
				y+=100;
				x=ras/2;
				chet*=2;
				num=0;
			}
			if(num==0){
				a=ras-x;
			}
			if(num>0){
			x+=a*2;
			}

			newDiv=document.createElement("div");
			newDiv.id="id"+id;
			newDiv.innerHTML=id++;
			newDiv.className="circle";
			newDiv.style.left=x+"px";
			newDiv.style.top=y+"px";

			el.appendChild(newDiv);
			mas[i]=newDiv;
			if(i!=0&&sch<2){
				x1=mas[n].style.left;
     			x1=x1.substring(0, x1.length-1 );
     			x1=x1.substring(0, x1.length-1 );
     			x1++;x1--;
     			y1=mas[n].style.top;
     			y1=y1.substring(0, y1.length-1 );
     			y1=y1.substring(0, y1.length-1 );
     			y1++;y1--;
				canvas.beginPath();

     			canvas.moveTo(x+25,y);
     			canvas.lineTo(x1+25,y1);
     			 canvas.lineWidth = 2;
   				canvas.strokeStyle = 'red';
    			canvas.stroke();
    			sch++;
    		}
    		if(sch==2){
    			sch=0;
    			n++;
    		}
			num++;
			}
			koll.style.visibility="hidden";
			buton.style.visibility="hidden";

			
			}

			function sh(){
				for(i=0;i<koll.value;i++){
						mas[i].style.backgroundColor="blue";
						mas[i].style.color='white';
				}
				if(kol2.value=="")return;
			k=0;
			while(mas[k].innerHTML!=kol2.value){
			mas[k].style.backgroundColor="#66FF00";
			mas[k++].style.color='black';	
			}
			mas[k].style.backgroundColor="#66FF00";
			mas[k].style.color='black';
		}

			m=0;
			function dfs(obj){
				m++;
				if(m==1)
				for(i=0;i<koll.value;i++){
						mas[i].style.backgroundColor="blue";
						mas[i].style.color='white';
				}
				if(kol2.value=="")return;
				mas[obj].style.backgroundColor="#66FF00";
				mas[obj].style.color='black';
				if(mas[obj].innerHTML==kol2.value)return;

					if(obj*2+1<koll.value&&mas[obj*2+1].style.color!='black'){
						obj=obj*2+1;
						dfs(obj);
					}else
					if(obj*2+2<koll.value&&mas[obj*2+2].style.color!='black'){
						obj=obj*2+2;
						dfs(obj);
					}
					else{
						if(obj%2!=0)
						obj=(obj-1)/2;
						else
							obj=(obj-2)/2;
						dfs(obj);
					}
					m=0;
				};