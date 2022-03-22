var job = {}; //singletone
job.removeItem = [];
job.allItem = []
const apiUrl = "https://62344f62c47cffbb870bd0aa.mockapi.io/api/job-manager/jobs";
job.renderJob = () => {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((jobs) => {
            job.allItem = jobs.map(job => Number(job.id))
            let htmls = jobs.map(job => (
                `<tr>
                    <td>
                        <input type="checkbox" onclick="job.selectJobItem(${job.id})">
                    </td>
                    <td class="job_id">
                        <a href="javascript:;" onclick="job.getJob(${job.id})">JID-${job.id}</a>
                    </td>
                    <td>${job.jobName}</td>
                    <td>
                        <img class="img-sm" src="${job.avatar}" >
                    </td>
                    
                    <td>${moment(job.createdDate).format("MMM DD, YYYY")}</td>
                    <td>${moment(job.deadline).format("MMM DD, YYYY")}</td>
                    <td>${job.employeer}</td>
                    <td>${job.leader}</td>
                    <td>
                        <a href="javascript:;" onclick="job.getJob(${job.id})"><i class="fa fa-edit"></i></a>
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
            if (confirmed) {
                let selectAll = document.querySelector("#tbJobs>thead input[type='checkbox']");
                if (selectAll.checked)
                    job.removeItem = [...job.allItem]
                if (job.removeItem) {
                    new Promise(
                        function (resolve) {
                            resolve("success")
                        }
                    )
                        .then(() => {
                            for (let selectedJobId of job.removeItem) {
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
    if (job.removeItem.includes(jobId)) {
        job.removeItem = job.removeItem.filter(item => item != jobId)
    }
    else {
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
    for (cbx of checkboxs) {
        cbx.checked = cbxAll.checked;
    }
}
job.openModal = () => {
    job.resetForm();
    document.querySelector("#created-date").valueAsDate = new Date();
    document.querySelector("#deadline").valueAsDate = new Date();
    $("#show-avatar").prop("src", "http://placeimg.com/640/480");
    $("#createEditJob").modal("show");
}

job.save = () => {
    if ($("#createEditJobForm").valid()) {
        let jobId = Number($('#jobId').val())
        if(jobId){
            job.modifyJob(jobId)
        }
        else{
            job.createJob();
        }
    }
}

job.createJob = () => {
    let createJob = {
        jobName: $("#jobname").val(),
        createdDate: $("#created-date").val(),
        deadline: $("#deadline").val(),
        employeer: $("#employer").val(),
        leader: $("#leader").val(),
        avatar: $("#show-avatar").attr("src")
    }
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(createJob)
    })
        .then(response => response.json())
        .then(data => {
            $("#createEditJob").modal("hide");
            job.renderJob();
        })
}

job.modifyJob = (jobId) => {
    let modifyJob = {
        id: Number(jobId),
        jobName: $("#jobname").val(),
        createdDate: $("#created-date").val(),
        deadline: $("#deadline").val(),
        employeer: $("#employer").val(),
        leader: $("#leader").val(),
        avatar: $("#show-avatar").attr("src")
    }
    fetch(`${apiUrl}/${jobId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(modifyJob)
    })
        .then(response => response.json())
        .then(data => {
            $("#createEditJob").modal("hide");
            job.renderJob();
        })
}
job.resetForm = () => {
    $("#createEditJobForm").validate().resetForm();
    $('#createEditJobForm').trigger("reset");
    $('.modal-title').text("Create job");
}

job.getJob = (jobId) => {
    fetch(`${apiUrl}/${jobId}`)
    .then((response) => response.json())
    .then((job) => {
        $("#jobname").val(job.jobName);
        $("#jobId").val(job.id);
        document.querySelector("#created-date").valueAsDate = new Date(job.createdDate);
        document.querySelector("#deadline").valueAsDate = new Date(job.deadline);
        $("#employer").val(job.employeer);
        $("#leader").val(job.leader);
        $("#show-avatar").prop("src", job.avatar);
        $('.modal-title').text("Modify job");
        $("#createEditJob").modal("show");
    })
}
(function () {
    job.renderJob();
})()