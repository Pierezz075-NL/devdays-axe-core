import fs from 'fs';
import path from 'path';
import { createHtmlReport } from 'axe-html-reporter';

// Function to log accessibility violations and create an HTML report
const reportViolations = (violations, test) => {
  if (violations.length > 0) {
    // Generate HTML report using axe-html-reporter
    const reportHTML = createHtmlReport({
      results: { violations },
      options: {
        projectKey: 'axe-core',
        customSummary: 'Accessibility Violations Report',
      }
    });

    // Define the report path
    const reportDir = path.resolve(__dirname, '../../reports');
    const reportPath = path.join(reportDir, `${test}-axe-report.html`);

    // Ensure the directory exists
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }

    // Save the report to a file
    fs.writeFileSync(reportPath, reportHTML);
  } else {
    console.log('No accessibility violations found');
  }
};

export { reportViolations };
