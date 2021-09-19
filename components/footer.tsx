import { Container } from './container';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 p-12">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3 text-gray-800 text-xs">
            <h3 className="font-bold text-md">ABOUT</h3>
            <p>How it's works</p>
            <p>About AirBnb</p>
            <p>Investors</p>
            <p>Careers</p>
            <p>Airbnb Plus</p>
          </div>

          <div className="space-y-3 text-gray-800 text-xs">
            <h3 className="font-bold text-md">Community</h3>
            <p>Diversity & Belonging</p>
            <p>Airbnb Associates</p>
            <p>Gift cards</p>
            <p>Against Discrimination</p>
            <p>Host Afghan refugees</p>
          </div>

          <div className="space-y-3 text-gray-800 text-xs">
            <h3 className="font-bold text-md">Host</h3>
            <p>Host your home</p>
            <p>Responsible hosting</p>
            <p>Host an Online Experience</p>
            <p>Resource Center</p>
            <p>Host an Experience</p>
          </div>

          <div className="space-y-3 text-gray-800 text-xs">
            <h3 className="font-bold text-md">Support</h3>
            <p>Our COVID-19 Response</p>
            <p>Neighborhood Support</p>
            <p>Help Center</p>
            <p>Trust & Safety</p>
            <p>Cancellation options</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
