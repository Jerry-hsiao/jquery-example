		class SelectComponent{
			constructor( target , selectData){
				// 創建虛擬元素
				let select = $('<select></select>')
				$.each(selectData , (index , item)=>{
					let html = `
						<option>${item}</option>
					`
					select.append( html )
				})

				// 將虛擬元素丟到畫面 html 上
				target.html( select )
			}
		}

		
		class ChartUtil{
			static drawLineChart(canvasObj , title , x , y){
				new Chart(canvasObj, {
				    // The type of chart we want to create
				    type: 'line',

				    // The data for our dataset
				    data: {
				        labels: x,
				        datasets: [{
				        	fill:false,
				            label: title ,
				            backgroundColor: 'rgb(255, 99, 132)',
				            borderColor: 'rgb(255, 99, 132)',
				            data: y
				        }]
				    },

				    // Configuration options go here
				    options: {}
				})
			}
		}