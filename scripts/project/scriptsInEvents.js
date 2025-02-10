


const scriptsInEvents = {

	async Emenupadselection_Event28_Act1(runtime, localVars)
	{
		const ProcessedItemName = runtime.globalVars.ProcessedItemName
		
		runtime.callFunction("onItemHasMinted", ProcessedItemName)
	},

	async Egameplay_Event2_Act8(runtime, localVars)
	{
		document.body.style.backgroundColor = "#11141c";
	},

	async Egameplay_Event7_Act1(runtime, localVars)
	{
		document.body.style.backgroundColor = "#181f2f";
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

