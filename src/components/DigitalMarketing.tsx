import React from 'react';
import { MonitorSmartphone } from 'lucide-react';
import { ServicePageLayout } from '../components/ServicePageLayout';

export function DigitalMarketingPage() {
  return (
    <ServicePageLayout
      title="Digital Marketing"
      description="Strategic campaigns across Google Ads, Facebook Ads, LinkedIn Ads, and more to reach your target audience and drive conversions."
      icon={<MonitorSmartphone className="w-16 h-16 text-orange-500" />}
      items={['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'SEO', 'Content Marketing']}
    >
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
          <p className="text-gray-300">We create data-driven digital marketing strategies that focus on delivering measurable results. Our team combines creativity with analytics to ensure your marketing budget generates the highest possible ROI.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2" />
              <span className="text-gray-300">Data-driven campaign optimization</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2" />
              <span className="text-gray-300">Cross-platform marketing expertise</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2" />
              <span className="text-gray-300">Transparent reporting and analytics</span>
            </li>
          </ul>
        </div>
      </div>
    </ServicePageLayout>
  );
}