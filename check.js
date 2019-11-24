		var json='{"matnr":"material","vkorg":"sales organisation","vtweg":"Distr Channel","spart":"division","kdgrp":"customer group","awahr":"order probability","waers":"currency","kalks":"customer price procedure","versg":"customer statistics group","kzazu":"order combinaton","vsbed":"shipment mode","antlf":"maximum partial deliveries","ktgrd":"account assignment group customer","title_medi":"title","name_org1":"name","title_let":"salutation","bu_sort1_txt":"search term 1/2","street":"street","house_num1":"house number","post_code1":"postal code","city1":"city","country":"country","region":"state/region","time _zone":"time zone","transpzone":"transportation zone","country":"country","addsc":"address description","addr_valid_from":"valid from","addr_valid_to":"valid to","bkvid":"bank id","banks":"bank country key","bankn":"bank account number","bkref":"bank reference details","koinh":"account holder name","bkdsc":"name of bank","cap_incr_a":"amount of last capital increase","ktokd":"customer account group","cityc":"city code","partner":"business partner number","spras":"language key","tdid":"text id","limit_rule":"rule for calculating score and credit limit","risk_class":"risk class","check_rule":"rule for credit check","bukrs":"company code","kunnr":"customer number","niels":"nielsen indicator","kukla":"customer classification","akont":"reconcillation account","fdgrv":"planning group","vzskz":"interest calculation indicator","etm_data":"etm data","ekorg":"purchase oranization","ekgrp":"purchase group","bukrs":"company code","werks":"plant"}';
		var obj=JSON.parse(json);
		function trns(ger)
		{
			with (document.G2E)
			{
				var german=ger.value.trim().toLowerCase();
				if (german in obj)
				{
					eng.value=obj[german];
				}
				else
				{
					eng.value='';
				}
			}
		}
		function swap(obj)
		{
			ret={}
			for (key in obj)
			{
				ret[obj[key]]=key;
			}
			return ret;
		}
		var reversed_obj=swap(obj);
		function trnse(eng)
		{
			with (document.G2E)
			{
				var english=eng.value.trim().toLowerCase();
				if (english in reversed_obj)
				{
					ger.value=reversed_obj[english];
				}
				else
				{
					ger.value='';
				}
			}
		}
