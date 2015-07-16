function generateUrl(stateParams){
	if(!stateParams){
		return;
	}

	var url = '';
	for(var key in stateParams){
		if(stateParams[key]){
			url += key + '=' + stateParams[key] + '&';
		}
	}
	if(url.slice(-1) == '&'){
		url = url.substring(0, url.length - 1);
	}
	return url;
}