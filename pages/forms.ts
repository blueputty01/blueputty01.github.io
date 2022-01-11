import Layout from "../components/layout";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Form Octopus</title>
      </Head>
      <div>
        <div className={utilStyles.iconedTitle}>
          <img src="/images/form-octopus/icon-128.png" alt="" />
          <h1>Form Octopus</h1>
        </div>
        <h2>Overview</h2>
        <h2 className={utilStyles.normalWeight}>
          Quickly review automatically generated multiple choice quizzes.
        </h2>
        <p>
          Form Octopus automatically creates a Google Form based on the provided
          key for a multiple choice quiz.
        </p>
        <p>
          Then, Form Octopus generates a Google Spreadsheet to review students'
          responses and identify the most difficult questions.
        </p>
        <h2>User Guide</h2>
        <div className="step">
          <h3>Step 1</h3>
          <p>
            In a blank Google Form, add a name question. This will allow the
            formatted spreadsheet to have a name label next to each row.
          </p>
          <p>
            Input the possible answer choices and the correct answer choices.
          </p>
          <p>
            For example, a test with A being the correct answer for #1, C for
            #2, and D for #3 would be input as ACD. The answer choices input
            field describes the options for each question. For example, the
            screenshot would result in each question having four choices: A, B,
            C, and D.
          </p>
          <img src="images/form-octopus/step-1.png" alt="" />
        </div>
        <div className="step">
          <h3>Step 2</h3>
          <p>
            Select "Add Section" to populate the Google From with questions.
            Repeat as needed. You may use the built-in Google Form sections tool
            if necessary.
          </p>
        </div>
        <div className="step">
          <h3>Step 3</h3>
          <p>Select "Create Spreadsheet".</p>
          <p>
            You will be able to access the spreadsheet through the spreadsheet
            icon found in the "responses" tab at the top of the page.
          </p>
          <img src="images/form-octopus/step-2.png" alt="" />
        </div>
        <h2>Video demonstration</h2>
        <div className={utilStyles.borderRadius}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/OGqMW0DycNQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <h2>Privacy</h2>
        <p>
          I value your privacy. Form Octopus itself does not store any data of
          any kind. All data is read from and written directly to the Google
          Form or Spreadsheet.
        </p>
        <p>
          For more information, here's the{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
        <br />
        <p>
          Feel free to <Link href="/contact">reach out</Link> with
          questions/concerns.
        </p>
      </div>
    </Layout>
  );
}

/*
Clearly explain what your app will do with user data.
Thoroughly describe how your app enhances user functionality.
Contain or provide a visible link to your Privacy Policy.
The Privacy Policy must clearly describe how your application accesses, uses, stores, or shares Google user data.
Read the Limited Use Requirements for more information and guidance.
Be a verified domain under your ownership.
Be accurate, inclusive, and easily accessible to all users.
Be on an externally & publicly accessible domain that describes the content, context, or connection to the app you are submitting.
We can't verify your project until all the URLs can be reached and are ready for production.
*/
