export function getCompanyById(companyId, companies) {
    for (let i = 0; i < companies.length; i++) {
        if (companyId === companies[i].id) {
            return companies[i]
        }
    }
    return null
}


//* getJobTags(jobId, tags, jobTags) -> масив назв тегів
export function getJobTags(jobId, tags, jobTags) {
    let result = []

    for (let i = 0; i < jobTags.length; i++) {
        if (jobTags[i].jobId === jobId) {
            for (let j = 0; j < tags.length; j++){
                if (tags[j].id === jobTags[i].tagId) {
                    result.push(tags[j].title)
                }
            }
        }
    }
    return result
}

//* getJobApplications(jobId, applications) -> масив аплікацій цієї вакансії

export function getJobApplications(jobId, applications) {
    let result = []

    for (let i = 0; i < applications.length; i++) {
        if (applications[i].jobId === jobId) {
            result.push(applications[i])
        }
    }
    return result
}

//* getApplicationsSummary(jobId, applications) -> об’єкт { new, interview, offer, rejected }

export function getApplicationsSummary(jobId, applications) {
    const summaryObj = {
        new: 0,
        interview: 0,
        offer: 0,
        rejected: 0
    }
    for (let i = 0; i < applications.length; i++) {
        if (applications[i].jobId === jobId) {
            summaryObj[applications[i].status]++
        }
    }
    return summaryObj
}


//* getJobCandidates(jobId, candidates, applications) -> масив кандидатів цієї вакансії
// (унікальні по id) ??????

export function getJobCandidates(jobId, candidates, applications) {
    let arrCandidates = []

    for (let i = 0; i < applications.length; i++){
        if (applications[i].jobId === jobId){
            for (let j = 0; j < candidates.length; j++){
                if (candidates[j].id === applications[i].candidateId) {
                    arrCandidates.push(candidates[j])
                }
            }
        }
    }
    return arrCandidates
}

//* getTopCandidates(jobId, candidates, applications, limit) -> масив кандидатів
// відсортований по experienceMonths desc, обрізаний до limit

export function getTopCandidates(jobId, candidates, applications, limit) {
    let result = []

    const sortCandidates = getJobCandidates(jobId, candidates, applications)
    sortCandidates.sort(function (a, b) {
        if (b.experienceMonths > a.experienceMonths) {
            return 1
        }
        if (b.experienceMonths < a.experienceMonths) {
            return -1
        }
        return 0
    })

    for (let i = 0; i < sortCandidates.length; i++) {
        if (result.length < limit) {
            result.push(sortCandidates[i])
        }
    }
    return result
}
