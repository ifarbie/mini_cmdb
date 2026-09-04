package farizrifkyb.mini_cmdb.service;

import java.util.List;

import org.springframework.stereotype.Service;

import farizrifkyb.mini_cmdb.entity.Ip;
import farizrifkyb.mini_cmdb.exception.ResourceNotFoundException;
import farizrifkyb.mini_cmdb.mapper.IpMapper;
import farizrifkyb.mini_cmdb.model.request.IpRequest;
import farizrifkyb.mini_cmdb.model.response.ApplicationGroupSimpleResponse;
import farizrifkyb.mini_cmdb.model.response.IpResponse;
import farizrifkyb.mini_cmdb.model.response.IpSimpleResponse;
import farizrifkyb.mini_cmdb.repository.IpRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class IpService {

    private final IpRepository ipRepository;

    private final IpMapper ipMapper;

    public List<IpResponse> getAllIps() {
        return ipRepository.findAll()
                .stream()
                .map(ip -> new IpResponse(
                        ip.getId(),
                        ip.getIpAddress(),
                        ip.getHostname(),
                        ip.getDescription(),
                        ip.getGroups()
                                .stream()
                                .map(group -> new ApplicationGroupSimpleResponse(
                                        group.getId(),
                                        group.getName(),
                                        group.getDescription()))
                                .toList()))
                .toList();
    }

    public IpResponse getIpById(Long id) {
        Ip ip = ipRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("IP Not Found"));

        return ipMapper.toResponse(ip);
    }

    public IpSimpleResponse createIp(IpRequest req) {
        Ip newIp = new Ip();

        newIp.setIpAddress(req.getIpAddress());
        newIp.setHostname(req.getHostname());
        newIp.setDescription(req.getDescription());

        ipRepository.save(newIp);

        return new IpSimpleResponse(
                newIp.getId(),
                newIp.getIpAddress(),
                newIp.getHostname(),
                newIp.getDescription());
    }

    public IpSimpleResponse updateIp(Long ipId, IpRequest req) {
        Ip ip = ipRepository.findById(ipId)
                .orElseThrow(() -> new ResourceNotFoundException("IP Not Found"));

        ip.setIpAddress(req.getIpAddress());
        ip.setHostname(req.getHostname());
        ip.setDescription(req.getDescription());

        ipRepository.save(ip);

        return ipMapper.toSimpleResponse(ip);
    }

    public String deleteIp(Long ipId) {
        Ip ip = ipRepository.findById(ipId)
                .orElseThrow(() -> new ResourceNotFoundException("IP Not Found"));

        ipRepository.delete(ip);

        return "Berhasil menghapus data";
    }
}
