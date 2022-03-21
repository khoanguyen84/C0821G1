var job = {}; //singletone
job.removeItem = [];
job.allItem = []
const apiUrl = "https://62344f62c47cffbb870bd0aa.mockapi.io/api/job-manager/jobs";
job.renderJob = () => {
    fetch(apiUrl)
        .then((response)=> response.json())
        .then((jobs) => {
            job.allItem = jobs.map(job => Number(job.id))
            let htmls = jobs.map(job => (
                `<tr>
                    <td>
                        <input type="checkbox" onclick="job.selectJobItem(${job.id})">
                    </td>
                    <td class="job_id">JID-${job.id}</td>
                    <td>${job.jobName}</td>
                    <td>
                        <img class="img-sm" src="${job.avatar}" >
                    </td>
                    
                    <td>${moment(job.createdDate).format("MMM DD, YYYY")}</td>
                    <td>${moment(job.deadline).format("MMM DD, YYYY")}</td>
                    <td>${job.employeer}</td>
                    <td>${job.leader}</td>
                    <td>
                        <i class="fa fa-edit"></i>
                    </td>
                </tr>
                `
            ))
            document.querySelector("#tbJobs>thead input[type='checkbox']").checked = false;
            document.querySelector('#tbJobs>tbody').innerHTML = htmls.join("");
        })
}

job.removeJobs = () => {
    bootbox.confirm({
        title: "Remove Jobs?",
        message: "Do you want to rmeove these jobs now? This cannot be undo.",
        buttons: {
            cancel: {
                label: '<i class="fa fa-times"></i> Cancel'
            },
            confirm: {
                label: '<i class="fa fa-check"></i> Confirm'
            }
        },
        callback: function (confirmed) {
            if(confirmed){
                let selectAll = document.querySelector("#tbJobs>thead input[type='checkbox']");
                if(selectAll.checked)
                    job.removeItem = [...job.allItem]
                if(job.removeItem){
                    new Promise(
                        function(resolve){
                            resolve("success")
                        }
                    )
                    .then(() => {
                        for(let selectedJobId of job.removeItem){
                            job.removeJob(selectedJobId)
                        }
                    })
                    setTimeout(job.renderJob, 2000);
                }
            }
        }
    });
}

job.selectJobItem = (jobId) => {
    if(job.removeItem.includes(jobId)){
        job.removeItem = job.removeItem.filter(item => item != jobId)
    }
    else{
        job.removeItem.push(jobId);
    }
}

job.removeJob = (jobId) => {
    fetch(`${apiUrl}/${jobId}`, {
        method: "DELETE"
    })
}

job.selectAll = (cbxAll) => {
    let checkboxs = document.querySelectorAll("#tbJobs>tbody input[type='checkbox']");
    for(cbx of checkboxs){
        cbx.checked = cbxAll.checked;
    }
}
;(function(){
    job.renderJob();
})()