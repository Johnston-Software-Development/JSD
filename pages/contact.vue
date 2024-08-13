{
<template lang="pug">
.row
  .col-lg-2
  .col-lg-8
    .card
      .row.m-1
        .col-lg-12
          img.rounded-circle(src="/me2.jpg" alt="Derek Johnston")
        .col-lg-12.pt-5
          h2 Derek Johnston
          h6
            |  Owner
          h6
            span.fa.fa-mobile(data-toggle="tooltip" title="905.926.8279") 
            |  905.926.8279
          h6 
            span.fa.fa-map-marker(data-toggle="tooltip" title="Ontatio, Canada")
            |  Durham Region, Ontatio, Canada
          h6
            a(href="mailto:Derek@JohnstonSoftwareDevelopment.ca") 
              span.far.fa-envelope(data-toggle="tooltip" title="Derek@JohnstonSoftwareDevelopment.ca")
              |  Derek@JohnstonSoftwareDevelopment.ca
            
  .col-lg-2
            //- .clearfix
</template>

<style scoped>
.successful-server-response-wrapper {
	display: flex;
	justify-content: center;
	align-content: center;
}

.successful-server-response {
	text-align: center;
	max-width: 500px;
	font-size: 36px;
	background-color: #5cb85c;
	color: #f1f1f1;
	padding: 20px;
	border-radius: 3px;
}
.row {
	margin-top: 23px !important;
}
</style>
