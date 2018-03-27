//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
//" Script Title       : 
//"                      
//" Script Date        : Mon Feb 26 11:30:49 2018
//"                       
//"'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

function Action()
{
	web.setSocketsOption('SSL_VERSION', '2&3');
	lr.startTransaction('HomePage');
	web.url(
		{
			name : 'web-qa-blue.corp.cdw.com', 
			url : 'https://web-qa-blue.corp.cdw.com', 
			resource : 0, 
			recContentType : 'text/html', 
			referer : '', 
			snapshot : 't11.inf', 
			mode : 'HTML'
		}
	);
	lr.endTransaction('HomePage', lr.AUTO)

	return 0;
}

