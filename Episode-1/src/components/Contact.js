
const Contact = () => {
    return (
        <div className="max-w-[600px] mx-auto my-10 px-4">

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Contact Us
            </h1>

            <p className="text-gray-600 mb-4">
                Have a question or feedback? We'd love to hear from you.
            </p>

            <div className="space-y-3 text-gray-700">

                <p>
                    <span className="font-semibold">Email:</span>{" "}
                    support@foodapp.com
                </p>

                <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    +91 98765 43210
                </p>

                <p>
                    <span className="font-semibold">Address:</span>{" "}
                    Tarn Taran, Punjab, India
                </p>

            </div>
        </div>
    );
};

export default Contact;
