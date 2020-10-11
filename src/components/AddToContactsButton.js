import AddContactIcon from "../svg/addContact";
import { checkIfInstagram } from "../helpers/checkIfInstagram";

export const AddToContactsButton = () => {
  const handleClick = () => {
    if (checkIfInstagram()) {
      alert(
        "Unfortunately this does not work properly from inside Instagram. Open this page in your phone's web browser and try again"
      );
    } else {
      window.open("/assets/contact_card.vcf");
    }
  };
  return (
    <button
      onClick={handleClick}
      className="flex flex-row items-start justify-start p-4 border max-w-sm text-center bg-blue-600 my-2"
    >
      <div className="w-6">
        <AddContactIcon />
      </div>
      <p className="ml-4 text-gray-200 font-bold">Add To Contacts</p>
    </button>
  );
};
