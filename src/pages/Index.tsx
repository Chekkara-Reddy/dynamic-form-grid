
import DynamicForm from "@/components/DynamicForm";
import { FormSection } from "@/types/form";

const Index = () => {
  // Demo sections with fields
  const demoSections: FormSection[] = [
    {
      id: "personal",
      title: "Personal Information",
      description: "Please provide your basic personal information",
      fields: [
        { id: "firstName", label: "First Name", type: "text", required: true },
        { id: "lastName", label: "Last Name", type: "text", required: true },
        { id: "email", label: "Email", type: "email", required: true },
        { id: "phone", label: "Phone Number", type: "tel" },
        { id: "birthdate", label: "Date of Birth", type: "date" },
      ]
    },
    {
      id: "address",
      title: "Address Details",
      description: "Your current residential address",
      fields: [
        { id: "address", label: "Address", type: "textarea" },
        { id: "city", label: "City", type: "text" },
        { id: "country", label: "Country", type: "select", options: [
          { value: "us", label: "United States" },
          { value: "uk", label: "United Kingdom" },
          { value: "ca", label: "Canada" },
        ]},
      ]
    },
    {
      id: "professional",
      title: "Professional Information",
      description: "Tell us about your professional background",
      fields: [
        { id: "occupation", label: "Occupation", type: "text" },
        { id: "company", label: "Company", type: "text" },
        { id: "department", label: "Department", type: "text" },
        { id: "position", label: "Position", type: "text" },
        { id: "experience", label: "Years of Experience", type: "number" },
        { id: "skills", label: "Skills", type: "textarea" },
        { id: "linkedin", label: "LinkedIn Profile", type: "text" },
        { id: "website", label: "Website", type: "text" },
      ]
    },
    {
      id: "preferences",
      title: "Preferences & Additional Information",
      description: "Help us customize your experience",
      fields: [
        { id: "interests", label: "Interests", type: "text" },
        { id: "referral", label: "Referral Source", type: "select", options: [
          { value: "friend", label: "Friend" },
          { value: "linkedin", label: "LinkedIn" },
          { value: "other", label: "Other" },
        ]},
        { id: "comments", label: "Additional Comments", type: "textarea" },
        { id: "newsletter", label: "Newsletter Preference", type: "select", options: [
          { value: "daily", label: "Daily" },
          { value: "weekly", label: "Weekly" },
          { value: "monthly", label: "Monthly" },
          { value: "none", label: "None" },
        ]},
      ]
    },
  ];

  const handleSubmit = (data: Record<string, any>) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="border-b border-gray-100 px-6 py-4">
            <h1 className="text-2xl font-semibold text-gray-800">Dynamic Form</h1>
            <p className="text-sm text-gray-500 mt-1">
              Please fill in the following information
            </p>
          </div>
          <DynamicForm 
            sections={demoSections} 
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
