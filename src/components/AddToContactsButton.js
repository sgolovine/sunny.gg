import AddContactIcon from "../svg/addContact";

export const AddToContactsButton = () => (
  <a
    href="/assets/contact_card.vcf"
    className="flex flex-row items-start justify-start p-4 border max-w-sm text-center bg-blue-600 my-2"
  >
    <div className="w-6">
      <AddContactIcon />
    </div>
    <p className="ml-4 text-gray-200 font-bold">Add To Contacts</p>
  </a>
);
