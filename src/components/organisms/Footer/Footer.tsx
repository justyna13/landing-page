import { Separator } from "@/components/ui/separator"

export const Footer = () => {
  return (
    <footer className="bg-[#2b2e4a] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Kolumna 1: Dane firmy */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* Logo firmy */}
            <div className="bg-white rounded-full p-2">
              <span className="text-black font-bold">JD</span>
            </div>
            <span className="text-lg font-semibold">Joe Doe</span>
          </div>
          <p>Nijstadstraat 2<br />
            7478DJ Diepenheim<br />
            Netherlands</p>
          <p className="mt-4">
            KvK-number: 78449227<br />
            Btw-identificationnumber:<br />
            NL861402728B01
          </p>
        </div>

        {/* Kolumna 2: Google Ads services */}
        <div>
          <h4 className="font-semibold mb-3">Google Ads services</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Outsource Google Ads</a></li>
            <li><a href="#" className="hover:underline">Google Ads audit</a></li>
            <li><a href="#" className="hover:underline">Google Ads coaching</a></li>
          </ul>
        </div>

        {/* Kolumna 3: Resources */}
        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Visit my LinkedIn</a></li>
            <li><a href="#" className="hover:underline">Google Ads community</a></li>
            <li><a href="#" className="hover:underline">Google Ads newsletter</a></li>
            <li><a href="#" className="hover:underline">Google Ads podcast</a></li>
          </ul>
        </div>

        {/* Kolumna 4: General */}
        <div>
          <h4 className="font-semibold mb-3">General</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">About me</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Terms and conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy statement</a></li>
            <li><a href="#" className="hover:underline">Cookie policy</a></li>
          </ul>
        </div>
      </div>

      {/* Separator */}
      <div className="my-8">
        <Separator className="bg-gray-400 opacity-30" />
      </div>

      {/* Partnerzy */}
      <div className="flex justify-center items-center gap-10">
        <img src="/google-partner.png" alt="Google Partner" width={120} height={40} />
        <img src="/microsoft-partner.png" alt="Microsoft Partner" width={140} height={40} />
      </div>
    </footer>
  )
}
