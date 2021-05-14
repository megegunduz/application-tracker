const getConcludedApplications = (applications) => {
    let concludedApplications = [];
    for ( let key in applications) {
        if (applications[key].isConcluded) {
            concludedApplications.push(applications[key]);
        }
    }

    return concludedApplications;
};

export default getConcludedApplications;