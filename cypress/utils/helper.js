const terminalLog = (violations) => {
    cy.task(
        'log',
        `${violations.length} accessibility violation${violations.length === 1 ? '' : 's'} ${
            violations.length === 1 ? 'was' : 'were'
        } detected`,
        { log: false }
    );
    // pluck specific keys to keep the table readable
    const violationData = violations.map(({ id, impact, description }) => ({
        id,
        impact,
        description,
    }));

    cy.task('table', violationData, { log: false });
    cy.task('log', 'run the test in the tesrunner to get a detailed log', {
        log: false,
    });
};

const testRunnerLog = (violations) => {
    violations.forEach((violation) => {
        const nodes = Cypress.$(violation.nodes.map((node) => node.target).join(','));

        Cypress.log({
            name: `${violation.impact} Accessibility issue`.toUpperCase(),
            consoleProps: () => violation,
            type: 'parent',
            $el: nodes,
            message: `[${violation.help}](${violation.helpUrl})`,
        });

        violation.nodes.forEach(({ target }) => {
            Cypress.log({
                name: 'repair element',
                type: 'child',
                $el: Cypress.$(target.join(',')),
                message: target,
            });
        });
    });
};

export const logAccessibilityResults = (violations) => {
    terminalLog(violations);
    testRunnerLog(violations);
};
