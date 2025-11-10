import {
  Tv,
  Zap,
  Shield,
  Smartphone,
  RefreshCw,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Tv,
    title: "4K and HD Content",
    description:
      "Crystal clear quality in 4K and HD for the best viewing experience.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Our dedicated support team is always ready to help you.",
  },
  {
    icon: Zap,
    title: "Fast and Reliable Service",
    description:
      "Ultra-fast access without interruption on our global server network.",
  },
  {
    icon: Smartphone,
    title: "Works on All Devices",
    description: "Easily access on Smart TV, phones, tablets and computers.",
  },
  {
    icon: RefreshCw,
    title: "Regular Updates",
    description:
      "New content and features added regularly for an always fresh experience.",
  },
  {
    icon: Shield,
    title: "Secure and Private",
    description:
      "Your data is encrypted and protected with military-grade security.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Flynix?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enjoy premium service with top-tier features and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-xl bg-background border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="mb-4 inline-block p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
