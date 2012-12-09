$(document).ready(function() {
	var totalGold = 0, totalSilver = 0, totalCopper = 0;
	
	$("#plus").click(function() {
		var gold = $("#gold").val();
		gold = parseInt(gold);
		var silver = $("#silver").val();
		silver = parseInt(silver);
		var copper = $("#copper").val();
		copper = parseInt(copper);
		
		totalCopper += copper;
		var copperBringOver = Math.floor(totalCopper / 100);
		if(copperBringOver >= 1){
			totalSilver += copperBringOver;
			totalCopper %= 100;
		}
		
		totalSilver += silver;
		var silverBringOver = Math.floor(totalSilver / 100);
		if(silverBringOver >= 1){
			totalGold += silverBringOver;
			totalSilver %= 100;
		}
		
		totalGold += gold;
		
		$("#totalCopper").val(totalCopper);
		$("#totalSilver").val(totalSilver);
		$("#totalGold").val(totalGold);
	});
	
	$("#minus").click(function() {
		var calculated = false;
		var gold = $("#gold").val();
		gold = parseInt(gold);
		var silver = $("#silver").val();
		silver = parseInt(silver);
		var copper = $("#copper").val();
		copper = parseInt(copper);
		
		if(gold > totalGold){
			alert("Invalid amount!");
		}else{
			totalGold -= gold;
			if(silver > totalSilver){
				if(totalGold >= 1 && silver <= 99){
					totalGold -= 1;
					totalSilver += 100;
					totalSilver -= silver;
					calculated = true;
				}else{
					alert("Invalid amount!");
				}
			}else{
				totalSilver -= silver;
				calculated = true;
			}
			
			if(calculated){
				if(copper > totalCopper){
					if(totalSilver >= 1 && copper <= 99){
						totalSilver -= 1;
						totalCopper += 100;
						totalCopper -= copper;
					}else{
						alert("Invalid amount!");
						calculated = false;
					}
				}else{
					totalCopper -= copper;
				}
			}
		}
		
		if(calculated){
			$("#totalCopper").val(totalCopper);
			$("#totalSilver").val(totalSilver);
			$("#totalGold").val(totalGold);
		}else{
			$("#totalCopper").val("");
			$("#totalSilver").val("");
			$("#totalGold").val("");
			totalGold = 0;
			totalSilver = 0;
			totalCopper = 0;
		}
	});
	
	$("#reset").click(function() {
		totalCopper = 0;
		totalSilver = 0;
		totalGold = 0;
		$("#totalCopper").val("");
		$("#totalSilver").val("");
		$("#totalGold").val("");
		$("#copper").val("0");
		$("#silver").val("0");
		$("#gold").val("0");
	});
});