<properties menutitle="Release notes volgende versie" pagetitle="Release notes volgende versie" category="Release notes" />

Release notes volgende versie (nog niet uitgebracht)
===================
De volgende verbeteringen en aanpassingen zullen in de volgende versie van Hybrid SaaS beschikbaar komen




Aanmelding email bevestiging via nabestelwebsite
----------------------
Het is nu mogelijk om na aanmelding op de nabestelwebsite een maatwerk bevestiging te sturen naar de aanmelder.
Bij de *Algemene instellingen* onder het kopje *E-mail sjablonen* is een extra optie gekomen waar het *e-mail sjabloon* kan worden geselecteerd.

![](images/algemene-instellingen.jpg)  
  
De organisatie gegevens kunnen worden gebruikt in de opmaak van dit e-mail sjabloon

![](images/e-mail-template.jpg)

 
Na het aanmelding op de nabestelwebsite ontvangt de aanmelder de vooraf ingestelde e-mail template 
![](images/ontvangen-email.jpg)

<div class="info">
	Indien er geen sjabloon is gekozen zal er uiteraard geen e-mail worden gestuurd na aanmelding.
</div>



Weergave van scrollbare dataweergave is verbeterd
------------------
De scrollbar van dataweergaven (*query's*) werkt niet helemaal juist, daardoor kon het voorkomen dat bijvoorbeeld niet naar de laatste kolom kon scrollen op lagere resoluties. Dit is opgelost.   


![](images/query-scrollbalk.jpg)

De scrollbalk loopt nu goed door naar rechts.

![](images/query-scrollbalk-fixed.jpg)



Weergave van sub-dataweergaven op invoerschermen is verbeterd
------------------
Ook op invoerschermen kon het voorkomen dat bepaalde sub-dataweergaven (*subquery's*) uitloop hadden in het invoerscherm.

![](images/dialoog-query-uitloop.jpg)

Dit is verholpen en de schermen zien er daardoor weer goed uit.

![](images/dialoog-query-uitloop-fixed.jpg)



Ticket geschiedenis
------------------
In de geschiedenis van een ticket kon het voorkomen dat de volgorde niet chronologisch was, de sortering is aangepast en de volgorde is nu weer aflopend.

![](images/ticket-geschiedenis-sortering.jpg)

Extranet ticket melding 'undefined'
------------------------
Indien er een ticket update email vanaf het extranet werd gestuurd met de FireFox browser, kwam er in de ticket geschiedenis de tekst 'undefined' te zien.

![](images/ticket-undefined.jpg)



Maatwerk rapportage
------------------------
De maatwerkrapportage werd technisch 2x uitgevoerd. Dit is nu nog maar 1x. Een performance verbetering van 100%.   