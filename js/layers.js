 var layers = {
        //day 1 ----------------------------------------------------------------------------------------------------------
		layer1: {
            layer: L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'),
            legend: '<i style="background: black; opacity: 0.5"></i><p><b>legend 1</b></p>'
        },
		layer2: {
            layer: L.geoJSON(path1),
        },
		layer3: {
			layer: L.marker([45.59008,-122.5927])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=15PmFT4UwpwvOF4brssFgouyfKvnKvjkm" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card1.html", '_blank');})
		},
		layer4: {
			layer: L.marker([53.94154,-109.9129])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1yQuXTfYm-hPLhsyVWTFOXzYm65zTJzg8" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card2.html", '_blank');})
		},
		layer5: { // green land
			layer: L.marker([62.81753,-41.2666])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1bdiCzlD1aE1GEAiyzQAFGjASt3VkKXio" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card3.html", '_blank');})
		},
		layer6: { //landing 
			layer: L.marker([63.99371, -22.62377])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1olwMvcFxZEofvJA88xJVkncoBPSXWIrX" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card4.html", '_blank');})
		},
		/// Day 2----------------------------------------------------------------------------------------
		layer7: {
            layer: L.geoJSON(path2),
        },
		layer8: { //Kökulist bakery
			layer: L.marker([63.9875,-22.5497])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1XC1SNNv0nTV-yy1W_ncl4qZ25xDBygTL" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card5.html", '_blank');})
		}, 
		layer9:{ /// Sky lagoon
			layer: L.marker([64.11647,-21.9462])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1QUOCQRa0UKFXtXwwrYHbCASQjhXlQdln" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card6.html", '_blank');})
		}, 
		layer10: {// Center Hotels Skjaldbreið
			layer: L.marker([64.14586,-21.9306])
			.bindTooltip(
			'<div>'+
				'<img src="" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card7.html", '_blank');})
		},
		layer11: {// Café Babalú
			layer: L.marker([64.1440, -21.93020])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1UHw_7ReIT80eA-rfHfXcU67efSvnYeEm" style="width:3em;height:3em">'+
			'</div>', 
			
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card8.html", '_blank');})
		},
		layer12: {// Fjallkonan
			layer: L.marker([64.14841, -21.94093])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=veW8MZMYYBX0wbwhRdmtlGdgAf_35yR" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card8.html", '_blank');})
		},
		layer13: {// Messinn
			layer: L.marker([64.14657,-21.9377])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1taETuVWSOhhkJsq5SQRbeAtH_MJ57B3Y" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card9.html", '_blank');})
		},
		layer14: {// Íslenski barinn
			layer: L.marker([64.14692,-21.93321])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1fF0do1tIQQYNznFAsbrPlbVOyL8_TwS_" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card10.html", '_blank');})
		},
		
		layer15: {//Café Loki
			layer: L.marker([64.14240,-21.92885])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1cMAhPycWR-Was9Ia4jpoldK8sbOqrzIQ" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card11.html", '_blank');})
		},
		// Day 3 -------------------------------------------------------------------------------
		layer166: {
            layer: L.geoJSON(rek2),
        },
		layer16: {//pool  
			layer: L.marker([64.1458316,-21.8791385])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1eN_lLkSKCc5ynE9qp3RtGskk3uDybM2v" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card12_2.html", '_blank');})
		},
		layer17: {//chruch 
			layer: L.marker([64.14191, -21.92705])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1kje64ebSJ9DKt-zBbiPr8fRMAsMsrx1K" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card13_2.html", '_blank');})
		},

		layer18: {//art place 
			layer: L.marker([64.1472848, -21.9322621])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1xAEA22iHHTtAjOtvIr-Ip6EoXBLjyMC3" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card14_2.html", '_blank');})
		},
		layer19: {//settlement  
			layer: L.marker([64.14809,-21.94205])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1R4u7ZYWfLPZ0ViI5YckWvl2h0gI3GpKm" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card15_2.html", '_blank');})
		},		

       	// Day 4------------------------------------------------------------------------------------------
		layer211: {
            layer: L.geoJSON(rek3),
        },		
		layer20: {//  snorkel 
			layer: L.marker([64.2552, -21.116927])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1UQ2dh_loowvDPrHSk4Z49E0tN2facnAB" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card17_3.html", '_blank');})
		},
		layer21: {//  lunch and pool  
			layer: L.marker([64.21384768965332, -20.734644579310928])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1wXIJuIwGX75kISHSIj3jUm6cx83IalXo" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card18_3.html", '_blank');})
		},		
		layer22: {//  gyiser water fall   
			layer: L.marker([64.32668405629538, -20.12125045080309])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1BXeH7Dr51SSPrv12E_P73x_wEuUzF_FV" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card19_3.html", '_blank');})
		},
		// day 5 cozy camper ------------------------------------------------------------------------------------
		layer23: {//  costco  
			layer: L.marker([64.07367405195127, -21.91418789358205])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1TLUiTtT0YcukBA0i1r5Qp6eHlfZGmG-0" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card20_4.html", '_blank');})
		},
		layer24: {//  cgeothemral park   
			layer: L.marker([64.00080210474334, -21.1877911317095])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=17rosZYTs-tV6ajkhqId2cGEQaHWbvcWN" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card21_4.html", '_blank');})
		},
		layer25: {//  crater   
			layer: L.marker([64.04011850811173, -20.885599389674663])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1QAlZtWrzB76T5_WCzrHGRhNRa0H7Dx3j" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card22_4.html", '_blank');})
		},
		layer26: {//  water fall   
			layer: L.marker([63.92394190029627, -20.672701022515923])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1c3jod-HXZe3UHYwxdTh9UMJuBfZYGqlM" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card23_4.html", '_blank');})
		},
		layer27: {//  water fall   
			layer: L.marker([63.81871264368317, -20.419612606741968])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1ipbTeLXuN2bzL8pU1kJBHbbgTbquMkkU" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card24_4.html", '_blank');})
		},
		layer28: {//  camp ground    
			layer: L.marker([63.74976440813053, -20.238825964103228])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1pnwq0fG2wNEOgczmONtm5wM1JVe7fjQx" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card26_4.html", '_blank');})
		},
		layer29: {
            layer: L.geoJSON(leg1)
		},
		//Day 6-------------------------------------------------------------------------------------------
		layer30: {
            layer: L.geoJSON(leg_2)
		},
		//to westman island
		layer31: {//  camp ground    
			layer: L.marker([63.74976440813053, -20.238825964103228])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1pnwq0fG2wNEOgczmONtm5wM1JVe7fjQx" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card27_5.html", '_blank');})
		},
		// walking around
		layer32: {    
			layer: L.marker([63.5309264, -20.1169753])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1Pkwf1NavBNHSAlZyP4uCNIDwOFDVi0k-" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card28_5.html", '_blank');})
		},
		// munseum
		layer33: {//  camp ground    
			layer: L.marker([63.74976440813053, -20.238825964103228])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1QhRSMBBJ93U52rQyzWfIGqLTQZeh-mDM" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card29_5.html", '_blank');})
		},
		// puff
		layer33: {    
			layer: L.marker([63.4332311, -20.3000177])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1JfcDZjCIZakBljHC0EKIID3nJgyTSgNE" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card30_5.html", '_blank');})
		},
		// back to iceland
		layer34: {    
			layer: L.marker([63.4190856, -18.9964961])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1-B7K6oAhQcxwffIKx2Bnk7BP4kgp5iWu" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card31_5.html", '_blank');})
		},
		// DAY7 --------------------------------------------------------------------------------------------
		layer35: {
            layer: L.geoJSON(leg3)
		},
		//camp
		layer36: {    
			layer: L.marker([63.4190856, -18.9964961])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1-B7K6oAhQcxwffIKx2Bnk7BP4kgp5iWu" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card32_6.html", '_blank');})
		},
		//ICE CAVE
		layer37: {    
			layer: L.marker([63.54685505307885, -18.82006621403458])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1aArL2a0zoV4lUPYgEz-QqjxE3h-jSFhp" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card33_6.html", '_blank');})
		},
		// LAVE show
		layer38: {    
			layer: L.marker([63.41836993642755, -19.010347528783527])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1Abnsct6BgxUCpk2XiKCDTB3qTf5ZN_wQ" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card34_6.html", '_blank');})
		},
		// BLACK SANDS
		layer39: {    
			layer: L.marker([63.40415149845345, -19.044971777387634])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=14cx5E6wfEikfm-0mSOknkbpWd-UdetRD" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card35_6.html", '_blank');})
		},		
		//from the road 
		layer40: {    
			layer: L.marker([63.97539504221354, -17.049989958941083])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1gtyRexlAGPUllxYlT4Gd2dsE6Mrru0R2" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card36_6.html", '_blank');})
		},
		//camp
		layer41: {    
			layer: L.marker([64.01586879212472, -16.97293184999766])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1tYXJuBz7y3v8tu2qiH_tkKhKkHWgv0sp" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card37_6.html", '_blank');})
		},
		// day 8 ---------------------------------------------------------------------------------------
		layer42: {
            layer: L.geoJSON(leg4)
		},
		//camp 
		layer43: {    
			layer: L.marker([64.01586879212472, -16.97293184999766])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1tYXJuBz7y3v8tu2qiH_tkKhKkHWgv0sp" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card38_7.html", '_blank');})
		},
		// restront
		layer44: {    
			layer: L.marker([64.25006079685754, -15.203929290027828])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1TLnqagkl94-yovxkan9e7MFWSDiE2DCw" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card39_7.html", '_blank');})
		},		
		//camp
		layer45: {    
			layer: L.marker([64.25823346900668, -15.204340374917725])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1MP-Qj3VZ6Aa75bJxf5Bo0MbrKwAcj0pL" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card40_7.html", '_blank');})
		},
		// day 9 ---------------------------------------------------------------------------------------
		layer46: {
            layer: L.geoJSON(leg5)
		},
		//camp 
		layer47: {    
			layer: L.marker([64.25823346900668, -15.204340374917725])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=13cVQHMmKDDv8PL_sHGHr__NEKhCh7A-0" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card41_8.html", '_blank');})
		},
		// restront
		layer48: {    
			layer: L.marker([64.83537328490347, -13.880581162086465])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1_mlPdG45AQLYIp_H-aICzk7Z0ZTYy4A1" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card42_8.html", '_blank');})
		},		
		//
		layer49: {    
			layer: L.marker([65.26076255336828, -14.010401699192968])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1pb0qCIi0wgMaWjqj_NF7dmhqdJiUcCCr" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card43_8.html", '_blank');})
		},
		//camp
		layer50: {    
			layer: L.marker([65.25939784339137, -14.01229028939817])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1wyd6BDorEf9zmVD0WrKR296XFn1_teQ9" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card44_8.html", '_blank');})
		},
		// day 10 ---------------------------------------------------------------------------------------
		layer51: {
            layer: L.geoJSON(leg6)
		},
		// leave camp 
		layer52: {    
			layer: L.marker([65.25939784339137, -14.01229028939817])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1wyd6BDorEf9zmVD0WrKR296XFn1_teQ9" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card44_8.html", '_blank');})
		},
		// water fall
		layer53: {    
			layer: L.marker([65.0944657865186, -14.889211130215312])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1AAK3lvHHfI5t913P7A6-y1hMbmn1Njqd" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card46_9.html", '_blank');})
		},		
		// on the road 
		layer54: {    
			layer: L.marker([65.58427113823025, -14.416995349830804])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1_fZJe7eR9P8MM-ezhuj7LeuIwj9TxAQP" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card47_9.html", '_blank');})
		},
		//camp
		layer55: {    
			layer: L.marker([65.6377431374739, -14.292206250021101])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1xKE-CHKDcxTmWPADAL0OXOgHEW_9t0Ol" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card48_9.html", '_blank');})
		},
		//Day 11----------------------------------------------------------------------------------
		layer56: {
            layer: L.geoJSON(leg7)
		},
		//ponys
		layer57: {    
			layer: L.marker([65.6377431374739, -14.292206250021101])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1ODxV78z1iFq9GwoqgYycGWMyhUPfjMky" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card49_10.html", '_blank');})
		},
		//powerplant
		layer58: {    
			layer: L.marker([65.70291633505194, -16.775183435587394])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1PIig3sWew5XgRrrWjaz96LylP1GftT1T" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card50_10.html", '_blank');})
		},
		//geothermal
		layer59: {    
			layer: L.marker([65.72205168241356, -16.7876284104773])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1C31XOGitzxUyGZeCclHQ6CBIEQRmGpeF" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card51_10.html", '_blank');})
		},
		//pizza
		layer60: {    
			layer: L.marker([65.62372400064237, -16.91838320073445])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1UbsamY8jZvcF8FZ9KkBmPHxW_q7VAZWR" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card52_10.html", '_blank');})
		},
		//camp
		layer61: {    
			layer: L.marker([65.64729869744566, -18.10558748537383])
			.bindTooltip(
			'<div>'+
				'<img src="" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card53_10.html", '_blank');})
		},
		// day 12 -----------------------------------------------------------------------------------------------------------------
		layer62: {
            layer: L.geoJSON(leg8)
		},
		//camp
		layer63: {    
			layer: L.marker([65.64671397845639, -18.106737767845303])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1ODxV78z1iFq9GwoqgYycGWMyhUPfjMky" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card54_11.html", '_blank');})
		},
		//garden
		layer64: {    
			layer: L.marker([65.67498173948567, -18.093921988226008])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1PIig3sWew5XgRrrWjaz96LylP1GftT1T" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card55_11.html", '_blank');})
		},
		//art
		layer65: {    
			layer: L.marker([65.68008872897661, -18.09182984237641])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1C31XOGitzxUyGZeCclHQ6CBIEQRmGpeF" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card56_11.html", '_blank');})
		},
		// hot  tub 
		layer66: {    
			layer: L.marker([65.92250334489508, -18.303975435405953])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1C31XOGitzxUyGZeCclHQ6CBIEQRmGpeF" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card57_11.html", '_blank');})
		},
				// road vid
		layer67: {    
			layer: L.marker([65.47392384646008, -18.66981188243143])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1C31XOGitzxUyGZeCclHQ6CBIEQRmGpeF" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card58_11.html", '_blank');})
		},
		// camp 
		layer68: {    
			layer: L.marker([65.46469645118005, -19.34988187600948])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1C31XOGitzxUyGZeCclHQ6CBIEQRmGpeF" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card59_11.html", '_blank');})
		},
		//day 13 --------------------------------------------------------------------
		layer69: {
            layer: L.geoJSON(leg9)
		},
		//camp
		layer70: {    
			layer: L.marker([65.46469645118005, -19.34988187600948])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1ODxV78z1iFq9GwoqgYycGWMyhUPfjMky" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card60_12.html", '_blank');})
		},
		//excute
		layer71: {    
			layer: L.marker([65.50150324554633, -20.3986369346135])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1PIig3sWew5XgRrrWjaz96LylP1GftT1T" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card61_12.html", '_blank');})
		},
		//wool
		layer72: {    
			layer: L.marker([65.39141353392854, -20.939391771808296])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1C31XOGitzxUyGZeCclHQ6CBIEQRmGpeF" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card62_12.html", '_blank');})
		},
		// // camp
		layer73: {    
			layer: L.marker([64.55150170605572, -21.908149817928987])
			.bindTooltip(
			'<div>'+
				'<img src="https://drive.google.com/uc?export=view&id=1C31XOGitzxUyGZeCclHQ6CBIEQRmGpeF" style="width:3em;height:3em">'+
			'</div>', 
			{permanent: true})
			.on('click', function markerOnClick(e){window.open("./pages/card63_12.html", '_blank');})
		},
		
		// //Day 14 ---------------------------------------------------------------------------------------------
		
};
