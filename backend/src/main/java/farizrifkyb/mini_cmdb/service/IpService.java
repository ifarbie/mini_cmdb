package farizrifkyb.mini_cmdb.service;

import java.util.List;

import org.springframework.stereotype.Service;

import farizrifkyb.mini_cmdb.entity.Ip;
import farizrifkyb.mini_cmdb.model.request.IpRequest;
import farizrifkyb.mini_cmdb.model.response.IpResponse;
import farizrifkyb.mini_cmdb.repository.IpRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class IpService {

    private final IpRepository ipRepository;

    public List<Ip> getAllIps() {
        return ipRepository.findAll();
    }

    public Ip getIpById(Long id) {
        return ipRepository.findById(id).orElseThrow(() -> new RuntimeException("Ip not found"));
    }

    public IpResponse createIp(IpRequest req) {
        Ip newIp = new Ip();

        newIp.setIpAddress(req.getIpAddress());
        newIp.setHostname(req.getHostname());
        newIp.setDescription(req.getDescription());

        ipRepository.save(newIp);

        return new IpResponse(req.getIpAddress(), req.getHostname(), req.getDescription());
    }

     public Ip updateIp(Long ipId, IpRequest req) {
        Ip ip = ipRepository.findById(ipId)
                .orElseThrow(() -> new RuntimeException("Ip not found"));

        ip.setIpAddress(req.getIpAddress());
        ip.setHostname(req.getHostname());
        ip.setDescription(req.getDescription());

        ipRepository.save(ip);

        return ip;
    }

    public String deleteIp(Long ipId) {
        Ip ip = ipRepository.findById(ipId)
                .orElseThrow(() -> new RuntimeException("Ip not found"));

        ipRepository.delete(ip);

        return "Berhasil menghapus data";
    }
}
